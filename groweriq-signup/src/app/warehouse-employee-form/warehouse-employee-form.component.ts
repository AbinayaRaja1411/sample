import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicForm } from '../user-create-form/dynamic-form.interface';

@Component({
  selector: 'app-warehouse-employee-form',
  templateUrl: './warehouse-employee-form.component.html',
  styleUrls: ['./warehouse-employee-form.component.scss']
})
export class WarehouseEmployeeFormComponent implements OnInit, OnDestroy, DynamicForm {
  @Input() userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm.addControl('years_of_experience', new FormControl(''));
    this.userForm.addControl('educational_qualification', new FormControl('', Validators.required));
    this.userForm.addControl('inventory_management_certification', new FormControl(null));
  }

  ngOnDestroy() {
    this.userForm.removeControl('years_of_experience');
    this.userForm.removeControl('educational_qualification');
    this.userForm.removeControl('inventory_management_certification');
  }

  get eduQualCtrl() { return this.userForm.get('educational_qualification'); }
}
