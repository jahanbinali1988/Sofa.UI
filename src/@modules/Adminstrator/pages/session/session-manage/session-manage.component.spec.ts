import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionManageComponent } from './session-manage.component';

describe('SessionManageComponent', () => {
  let component: SessionManageComponent;
  let fixture: ComponentFixture<SessionManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
