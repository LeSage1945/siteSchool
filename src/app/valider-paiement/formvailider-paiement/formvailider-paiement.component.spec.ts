import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvailiderPaiementComponent } from './formvailider-paiement.component';

describe('FormvailiderPaiementComponent', () => {
  let component: FormvailiderPaiementComponent;
  let fixture: ComponentFixture<FormvailiderPaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormvailiderPaiementComponent]
    });
    fixture = TestBed.createComponent(FormvailiderPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
