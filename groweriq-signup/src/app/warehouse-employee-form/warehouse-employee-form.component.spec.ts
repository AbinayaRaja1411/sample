import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseEmployeeFormComponent } from './warehouse-employee-form.component';

describe('WarehouseEmployeeFormComponent', () => {
  let component: WarehouseEmployeeFormComponent;
  let fixture: ComponentFixture<WarehouseEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
