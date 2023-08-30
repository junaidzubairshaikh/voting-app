import { TestBed } from '@angular/core/testing';

import { TruckLoadService } from './truck-load.service';

describe('TruckLoadService', () => {
  let service: TruckLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
