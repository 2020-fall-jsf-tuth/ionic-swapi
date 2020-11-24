import { TestBed } from '@angular/core/testing';

import { BizLogicService } from './biz-logic.service';

describe('BizLogicService', () => {
  let service: BizLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BizLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
