import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDprComponent } from './view-dpr.component';

describe('ViewDprComponent', () => {
  let component: ViewDprComponent;
  let fixture: ComponentFixture<ViewDprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
