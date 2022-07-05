import { TestBed } from '@angular/core/testing';

import { CustomTitleStrategyService } from './custom-title-strategy.service';

describe('CustomTitleStrategyService', () => {
  let service: CustomTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
