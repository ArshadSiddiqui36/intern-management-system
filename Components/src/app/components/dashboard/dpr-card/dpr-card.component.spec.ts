import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprCardComponent } from './dpr-card.component';

describe('DprCardComponent', () => {
  let component: DprCardComponent;
  let fixture: ComponentFixture<DprCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DprCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DprCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
