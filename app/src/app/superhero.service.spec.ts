import { TestBed, inject } from '@angular/core/testing';

import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperheroService]
    });
  });

  it('should be created', inject([SuperheroService], (service: SuperheroService) => {
    expect(service).toBeTruthy();
  }));
});
