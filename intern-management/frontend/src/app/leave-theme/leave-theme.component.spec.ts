import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveThemeComponent } from './leave-theme.component';

describe('LeaveThemeComponent', () => {
  let component: LeaveThemeComponent;
  let fixture: ComponentFixture<LeaveThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
