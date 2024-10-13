import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpoAccountComponent } from './kpo-account.component';

describe('KpoAccountComponent', () => {
  let component: KpoAccountComponent;
  let fixture: ComponentFixture<KpoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpoAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
