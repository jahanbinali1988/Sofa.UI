import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManageComponent } from './post-manage.component';

describe('PostManageComponent', () => {
  let component: PostManageComponent;
  let fixture: ComponentFixture<PostManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
