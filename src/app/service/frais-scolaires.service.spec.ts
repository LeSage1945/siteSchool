import { TestBed } from '@angular/core/testing';

import { FraisScolairesService } from './frais-scolaires.service';

describe('FraisScolairesService', () => {
  let service: FraisScolairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisScolairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
