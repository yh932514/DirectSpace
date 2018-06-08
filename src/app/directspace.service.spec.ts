import { TestBed, inject } from '@angular/core/testing';

import { DirectspaceService } from './directspace.service';

describe('DirectspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectspaceService]
    });
  });

  it('should be created', inject([DirectspaceService], (service: DirectspaceService) => {
    expect(service).toBeTruthy();
  }));
});
