import { TestBed } from '@angular/core/testing';

import { MobileMoneyPaiementService } from './mobile-money-paiement.service';

describe('MobileMoneyPaiementService', () => {
  let service: MobileMoneyPaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileMoneyPaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
