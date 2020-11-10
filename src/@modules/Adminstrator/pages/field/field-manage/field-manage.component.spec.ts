import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldManageComponent } from './field-manage.component';

describe('FieldManageComponent', () => {
  let component: FieldManageComponent;
  let fixture: ComponentFixture<FieldManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
