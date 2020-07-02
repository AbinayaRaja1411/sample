import { Component, OnInit, Type } from '@angular/core';
import { ShareDataService } from 'src/services/share-data.service';
import { Router } from '@angular/router';
import { UserBasicInfo } from 'src/model/user-basic-info';
import { Gender } from 'src/model/gender.enum';
import { UserTypes } from 'src/model/user-types.enum';
import { EnumDisplayTextPipe } from 'src/pipes/enum-display-text.pipe';
import { YesNo } from 'src/model/yes-no.enum';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private shareDataService: ShareDataService,
              private router: Router,
              private enumDisplayTextPipe: EnumDisplayTextPipe) { }

  fields: string[];
  createdUser: UserBasicInfo;
  fieldDisplayNames: { key: string, value: string, dataType?: any }[] = [
    { key: 'name', value: 'Name' },
    { key: 'phone_number', value: 'Phone Number' },
    { key: 'type', value: 'User Type', dataType: UserTypes },
    { key: 'gender', value: 'Gender', dataType: Gender },
    { key: 'address', value: 'Address' },
    { key: 'batches_handled', value: 'Number of batches handled' },
    { key: 'yield_acquired', value: 'Yield Acquired (in kgs)' },
    { key: 'greenhouse_locations', value: 'Greenhouse Locations' },
    { key: 'years_of_experience', value: 'Years of Experience' },
    { key: 'educational_qualification', value: 'Educational Qualification' },
    { key: 'inventory_management_certification', value: 'Inventory Management Certification', dataType: YesNo }
  ];
  ngOnInit() {
    if (this.shareDataService.createUserServiceResponse) {
      this.createdUser = this.shareDataService.createUserServiceResponse.createdUser;
      this.fields = Object.keys(this.createdUser);
    } else {
      this.backToUsersList();
    }
  }

  backToUsersList() {
    this.shareDataService.createUserServiceResponse = null;
    this.router.navigate(['']);
  }

  getFieldDisplayName(fieldName: string) {
    const idx = this.fieldDisplayNames.findIndex(field => field.key === fieldName);
    if (idx > -1) {
      return this.fieldDisplayNames[idx].value;
    } else {
      return fieldName;
    }
  }

  getFieldType(fieldName: string) {
    const idx = this.fieldDisplayNames.findIndex(field => field.key === fieldName);
    if (idx > -1) {
      return this.fieldDisplayNames[idx].dataType ? this.fieldDisplayNames[idx].dataType : String;
    } else {
      return String;
    }
  }

  getFieldValue(fieldName: string) {
    const fieldType = this.getFieldType(fieldName);
    if (fieldType === String) {
      return this.createdUser[fieldName];
     } else {
       return this.enumDisplayTextPipe.transform(this.createdUser[fieldName], fieldType);
     }
  }
}
