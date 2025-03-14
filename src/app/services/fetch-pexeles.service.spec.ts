import { TestBed } from '@angular/core/testing';

import { FetchPexelesService } from './fetch-pexeles.service';

describe('FetchPexelesService', () => {
  let service: FetchPexelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPexelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
