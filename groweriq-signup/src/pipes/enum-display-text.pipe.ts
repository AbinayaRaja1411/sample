import { Pipe, PipeTransform, Type } from '@angular/core';

@Pipe({ name: 'displayText' })
export class EnumDisplayTextPipe implements PipeTransform {
  transform(enumValue: string, enumType: Type<any>) {
      if (enumValue) {
        return enumType[enumValue] ? enumType[enumValue] : enumValue;
      } else {
          return 'N/A';
      }
  }
}
