import { TestBed, inject } from '@angular/core/testing';

import { BonsaiStorageService } from './bonsai-storage.service';

describe('BonsaiStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BonsaiStorageService]
    });
  });

  it('should be created', inject([BonsaiStorageService], (service: BonsaiStorageService) => {
    expect(service).toBeTruthy();
  }));
});
