import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormControlComponent } from './address-form-control.component';

describe('AddressFormControlComponent', () => {
  let component: AddressFormControlComponent;
  let fixture: ComponentFixture<AddressFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
