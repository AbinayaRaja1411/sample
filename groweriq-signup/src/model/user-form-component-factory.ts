import { Type } from '@angular/core';
import { UserTypes } from './user-types.enum';
import { GrowerFormComponent } from 'src/app/grower-form/grower-form.component';
import { WarehouseEmployeeFormComponent } from 'src/app/warehouse-employee-form/warehouse-employee-form.component';

export class UserFormComponentFactory {
    static getDynamicFormComponent(userType: UserTypes): Type<any> {
        if (userType) {
            if (userType.toString() === 'grower') {
                return GrowerFormComponent;
            } else {
                return WarehouseEmployeeFormComponent;
            }
        }
    }
}
