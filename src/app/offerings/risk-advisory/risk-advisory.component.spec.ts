import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAdvisoryComponent } from './risk-advisory.component';

describe('RiskAdvisoryComponent', () => {
  let component: RiskAdvisoryComponent;
  let fixture: ComponentFixture<RiskAdvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskAdvisoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
