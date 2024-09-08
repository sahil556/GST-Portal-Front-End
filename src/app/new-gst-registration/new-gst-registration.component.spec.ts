import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGstRegistrationComponent } from './new-gst-registration.component';

describe('NewGstRegistrationComponent', () => {
  let component: NewGstRegistrationComponent;
  let fixture: ComponentFixture<NewGstRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewGstRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGstRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
