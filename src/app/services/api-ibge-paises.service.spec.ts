import { TestBed } from '@angular/core/testing';

import { ApiIbgePaisesService } from './api-ibge-paises.service';

describe('ApiIbgePaisesService', () => {
  let service: ApiIbgePaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIbgePaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
