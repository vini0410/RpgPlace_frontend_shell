import { TestBed } from '@angular/core/testing';

import { ControlSessionService } from './control-session.service';

describe('ControlSessionService', () => {
  let service: ControlSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
