import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { UserBasicInfo } from 'src/model/user-basic-info';
import { UserTypes } from 'src/model/user-types.enum';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { UserCreateDialogComponent } from '../user-create-dialog/user-create-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) usersTablePaginator: MatPaginator;

  constructor(private userService: UserService, private matDialog: MatDialog) { }
  private usersData = new MatTableDataSource<UserBasicInfo>();
  private visibleColumns = ['name', 'phone_number', 'type'];
  private userTypes = UserTypes;

  ngOnInit() {
    this.userService.getUsers().subscribe(usersResponseData => {
      this.usersData.paginator = this.usersTablePaginator;
      this.usersData.data = usersResponseData.reverse();
    });
  }

  openCreateUser() {
    const createUserDialog = this.matDialog.open(UserCreateDialogComponent, { maxWidth: 500 });
    createUserDialog.afterClosed().subscribe(x => console.log(x));
  }
}
