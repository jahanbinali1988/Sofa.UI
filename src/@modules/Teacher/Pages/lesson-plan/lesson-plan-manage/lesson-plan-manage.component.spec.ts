import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanManageComponent } from './lesson-plan-manage.component';

describe('LessonPlanManageComponent', () => {
  let component: LessonPlanManageComponent;
  let fixture: ComponentFixture<LessonPlanManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPlanManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
