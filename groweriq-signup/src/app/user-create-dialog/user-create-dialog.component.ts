import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.scss']
})
export class UserCreateDialogComponent implements OnInit {

  constructor(private createUserDialog: MatDialogRef<UserCreateDialogComponent>) { }

  ngOnInit() {
    this.createUserDialog.disableClose = true;
  }

  cancel() {
    this.createUserDialog.close();
  }
}
