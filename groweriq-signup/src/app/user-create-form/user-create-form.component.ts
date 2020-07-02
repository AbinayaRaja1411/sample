import { Component, OnInit, ViewChild, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DynamicFormcontrolsDirective } from './dynamic-formcontrols.directive';
import { UserTypes } from 'src/model/user-types.enum';
import { UserFormComponentFactory } from 'src/model/user-form-component-factory';
import { DynamicForm } from './dynamic-form.interface';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent implements OnInit {
  @ViewChild(DynamicFormcontrolsDirective) dynamicFormControls;
  @Output() pageRedirecting = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver,
    private userService: UserService,
    private router: Router) {
    this.buildUserFormControls();
  }

  userForm: FormGroup;
  userTypes = UserTypes;
  userTypeKeys = Object.keys(this.userTypes);

  ngOnInit() {
    this.userForm.get('type').valueChanges.subscribe(selectedUserType => this.loadFormComponentForSelectedUserType(selectedUserType));
  }

  buildUserFormControls() {
    this.userForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.min(3)]),
      phone_number: new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/\+\d+\d?\s?\d{10}/))]),
      gender: new FormControl(),
      type: new FormControl(null, Validators.required),
      address: new FormControl()
    });
  }

  loadFormComponentForSelectedUserType(selectedUserType: UserTypes) {
    const dynamicFormPlaceHolder = this.dynamicFormControls.viewContainerRef;
    dynamicFormPlaceHolder.clear();
    const componentToDisplay = UserFormComponentFactory.getDynamicFormComponent(selectedUserType);
    if (componentToDisplay) {
      const dynamicUserFormComponent = this.componentFactoryResolver.resolveComponentFactory(componentToDisplay);
      const dynamicUserSpecificForm = dynamicFormPlaceHolder.createComponent(dynamicUserFormComponent);
      (dynamicUserSpecificForm.instance as DynamicForm).userForm = this.userForm;
    }
  }

  onSubmit() {
    this.validateAllFormFields(this.userForm);
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/userdetail']);
      },
        () => {
          this.router.navigate(['/error']);
        }
      );
      this.pageRedirecting.emit();
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  get isFormValid() { return this.userForm.valid; }
  get nameCtrl() { return this.userForm.get('name'); }
  get phoneNumberCtrl() { return this.userForm.get('name'); }
  get userTypeCtrl() { return this.userForm.get('phone_number'); }
}
