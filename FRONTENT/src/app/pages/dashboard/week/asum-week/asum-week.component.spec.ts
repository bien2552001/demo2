import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsumWeekComponent } from './asum-week.component';

describe('AsumWeekComponent', () => {
  let component: AsumWeekComponent;
  let fixture: ComponentFixture<AsumWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsumWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsumWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
