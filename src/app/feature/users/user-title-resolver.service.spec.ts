import { TestBed } from '@angular/core/testing';

import { UserTitleResolverService } from './user-title-resolver.service';

describe('UserTitleResolverService', () => {
  let service: UserTitleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTitleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
