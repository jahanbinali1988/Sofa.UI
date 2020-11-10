import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermManageComponent } from './term-manage.component';

describe('TermManageComponent', () => {
  let component: TermManageComponent;
  let fixture: ComponentFixture<TermManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
