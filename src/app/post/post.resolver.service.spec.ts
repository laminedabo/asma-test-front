import { TestBed } from '@angular/core/testing';

import { PostResolver } from './post.resolver.service';

describe('PostResolver', () => {
  let service: PostResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
