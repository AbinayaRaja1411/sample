import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Address } from 'src/model/address';

@Component({
  selector: 'app-address-form-control',
  templateUrl: './address-form-control.component.html',
  styleUrls: ['./address-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressFormControlComponent),
    multi: true
  }]
})
export class AddressFormControlComponent implements OnInit, ControlValueAccessor {

  constructor(private formBuilder: FormBuilder) {
    this.buildFormControls();
  }
  addressForm: FormGroup;
  disableControl: boolean;
  onChange = (address: string) => {};
  onTouched = () => {};

  ngOnInit() {
    this.addressForm.valueChanges.subscribe(value => {
      this.onChange(Object.values(value).join(', '));
      this.onTouched();
    });
  }

  writeValue(obj: string): void {
    if (obj) {
    this.addressForm.setValue(this.getAddressStringToObject(obj));
    } else {
      this.addressForm.reset();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disableControl = isDisabled;
  }

  buildFormControls() {
    this.addressForm = this.formBuilder.group({
      streetAddress: new FormControl(''),
      city: new FormControl(''),
      province: new FormControl(''),
      country: new FormControl(''),
      postalCode: new FormControl('')
    });
  }

  getAddressStringToObject(address: string) {
    const addr = address.split(',');
    const addrParts = addr.fill('', addr.length, 4);
    return new Address(addrParts[0], addrParts[1], addrParts[2], addrParts[3], addrParts[4]);
  }


}
