import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { UserBasicInfo } from 'src/model/user-basic-info';
import { UserTypes } from 'src/model/user-types.enum';
import { MatDialog } from '@angular/material';
import { UserCreateDialogComponent } from '../user-create-dialog/user-create-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private usersData: UserBasicInfo[];
  constructor(private userService: UserService, private matDialog: MatDialog) { }

  visibleColumns = ['name', 'phone_number', 'type'];
  userTypes = UserTypes;

  ngOnInit() {
    this.userService.getUsers().subscribe(usersResponseData => this.usersData = usersResponseData);
  }

  openCreateUser() {
    const createUserDialog = this.matDialog.open(UserCreateDialogComponent);
    createUserDialog.afterClosed().subscribe(x => console.log(x));
  }
}
