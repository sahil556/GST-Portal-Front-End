import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingSystemComponent } from './accounting-system.component';

describe('AccountingSystemComponent', () => {
  let component: AccountingSystemComponent;
  let fixture: ComponentFixture<AccountingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
