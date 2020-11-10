import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanListComponent } from './lesson-plan-list.component';

describe('LessonPlanListComponent', () => {
  let component: LessonPlanListComponent;
  let fixture: ComponentFixture<LessonPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPlanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
