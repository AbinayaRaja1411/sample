import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateDialogComponent } from './user-create-dialog/user-create-dialog.component';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WarehouseEmployeeFormComponent } from './warehouse-employee-form/warehouse-employee-form.component';
import { GrowerFormComponent } from './grower-form/grower-form.component';
import { DynamicFormcontrolsDirective } from './user-create-form/dynamic-formcontrols.directive';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ErrorComponent } from './error/error.component';
import { EnumDisplayTextPipe } from 'src/pipes/enum-display-text.pipe';
import { AddressFormControlComponent } from './address-form-control/address-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateDialogComponent,
    UserCreateFormComponent,
    WarehouseEmployeeFormComponent,
    GrowerFormComponent,
    DynamicFormcontrolsDirective,
    UserDetailComponent,
    ErrorComponent,
    EnumDisplayTextPipe,
    AddressFormControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UserCreateDialogComponent,
    WarehouseEmployeeFormComponent,
    GrowerFormComponent
  ],
  exports: [
    DynamicFormcontrolsDirective
  ],
  providers: [HttpClientModule, EnumDisplayTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
