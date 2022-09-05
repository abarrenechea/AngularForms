import { TestBed } from '@angular/core/testing';

import { ActuarialModelService } from './actuarial-model.service';

describe('ActuarialModelService', () => {
  let service: ActuarialModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuarialModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
