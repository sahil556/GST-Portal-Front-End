import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSupportComponent } from './corporate-support.component';

describe('CorporateSupportComponent', () => {
  let component: CorporateSupportComponent;
  let fixture: ComponentFixture<CorporateSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
