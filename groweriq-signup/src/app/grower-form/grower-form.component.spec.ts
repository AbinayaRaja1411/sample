import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowerFormComponent } from './grower-form.component';

describe('GrowerFormComponent', () => {
  let component: GrowerFormComponent;
  let fixture: ComponentFixture<GrowerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
