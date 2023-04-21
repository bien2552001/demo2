import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsumDayComponent } from './asum-day.component';

describe('AsumDayComponent', () => {
  let component: AsumDayComponent;
  let fixture: ComponentFixture<AsumDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsumDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsumDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
