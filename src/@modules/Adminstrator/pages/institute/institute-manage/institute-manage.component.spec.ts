import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteManageComponent } from './institute-manage.component';

describe('InstituteManageComponent', () => {
  let component: InstituteManageComponent;
  let fixture: ComponentFixture<InstituteManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
