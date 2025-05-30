import { TestBed } from '@angular/core/testing';

import { ErreurGlobalService } from './erreur-global.service';

describe('ErreurGlobalService', () => {
  let service: ErreurGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErreurGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
