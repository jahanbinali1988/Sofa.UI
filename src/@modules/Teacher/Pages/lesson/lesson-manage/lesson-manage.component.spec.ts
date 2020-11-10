import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonManageComponent } from './lesson-manage.component';

describe('LessonManageComponent', () => {
  let component: LessonManageComponent;
  let fixture: ComponentFixture<LessonManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
