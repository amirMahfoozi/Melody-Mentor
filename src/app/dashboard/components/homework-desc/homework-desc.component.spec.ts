import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDescComponent } from './homework-desc.component';

describe('HomeworkDescComponent', () => {
  let component: HomeworkDescComponent;
  let fixture: ComponentFixture<HomeworkDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeworkDescComponent]
    });
    fixture = TestBed.createComponent(HomeworkDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
