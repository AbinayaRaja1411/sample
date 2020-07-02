import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicForm } from '../user-create-form/dynamic-form.interface';

@Component({
  selector: 'app-grower-form',
  templateUrl: './grower-form.component.html',
  styleUrls: ['./grower-form.component.scss']
})
export class GrowerFormComponent implements OnInit, OnDestroy, DynamicForm {
  @Input() userForm: FormGroup;
  constructor() { }

  locations: string[] = ['Toronto', 'Mississauga‎', 'Markham', 'Oakville', 'Oshawa', 'Guelph'];

  ngOnInit() {
    this.userForm.addControl('batches_handled', new FormControl('', Validators.required));
    this.userForm.addControl('yield_acquired', new FormControl(''));
    this.userForm.addControl('greenhouse_locations', new FormControl(null, Validators.required));
  }

  ngOnDestroy() {
    this.userForm.removeControl('batches_handled');
    this.userForm.removeControl('yield_acquired');
    this.userForm.removeControl('greenhouse_locations');
  }

  get batchesHandledCtrl() { return this.userForm.get('batches_handled'); }
  get greenhouseLocnCtrl() { return this.userForm.get('greenhouse_locations'); }
}
