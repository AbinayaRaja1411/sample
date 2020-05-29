import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warehouse-employee-form',
  templateUrl: './warehouse-employee-form.component.html',
  styleUrls: ['./warehouse-employee-form.component.scss']
})
export class WarehouseEmployeeFormComponent implements OnInit {
  @Input() userForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
