import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsAndAssuranceComponent } from './audits-and-assurance.component';

describe('AuditsAndAssuranceComponent', () => {
  let component: AuditsAndAssuranceComponent;
  let fixture: ComponentFixture<AuditsAndAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditsAndAssuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditsAndAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
