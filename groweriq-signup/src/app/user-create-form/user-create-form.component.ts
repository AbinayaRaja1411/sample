import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormcontrolsDirective } from './dynamic-formcontrols.directive';
import { UserTypes } from 'src/model/user-types.enum';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  @ViewChild(DynamicFormcontrolsDirective) dynamicFormControls: DynamicFormcontrolsDirective;
  userTypes = UserTypes;
  userTypeKeys = Object.keys(this.userTypes);

  ngOnInit() {
  }

  buildUserFormControls() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      userType: [null, Validators.required]
    });
  }
}
