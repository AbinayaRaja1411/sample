import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grower-form',
  templateUrl: './grower-form.component.html',
  styleUrls: ['./grower-form.component.scss']
})
export class GrowerFormComponent implements OnInit {
  @Input() userForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
