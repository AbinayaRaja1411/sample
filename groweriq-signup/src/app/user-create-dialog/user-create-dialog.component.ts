import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserCreateFormComponent } from '../user-create-form/user-create-form.component';

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.scss']
})
export class UserCreateDialogComponent implements OnInit {

  constructor(private createUserDialog: MatDialogRef<UserCreateDialogComponent>) { }
  @ViewChild(UserCreateFormComponent) userCreateFormComponent;
  ngOnInit() {
    this.createUserDialog.disableClose = true;
  }

  submitUserInfo() {
    this.userCreateFormComponent.onSubmit();
  }

  modalClose(event: Event) {
    if (!this.userCreateFormComponent.isFormValid) {
      event.preventDefault();
    }
  }
}
