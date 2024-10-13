import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrualAccountingSystemComponent } from './accrual-accounting-system.component';

describe('AccrualAccountingSystemComponent', () => {
  let component: AccrualAccountingSystemComponent;
  let fixture: ComponentFixture<AccrualAccountingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccrualAccountingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccrualAccountingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
