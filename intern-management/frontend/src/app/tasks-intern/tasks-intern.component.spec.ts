import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInternComponent } from './tasks-intern.component';

describe('TasksInternComponent', () => {
  let component: TasksInternComponent;
  let fixture: ComponentFixture<TasksInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
