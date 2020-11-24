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

  it(
    'getDisplayColor() should color Tatooine green'
    , () => {
      expect(
        service.getDisplayColor({name: 'Tatooine'})
      ).toBe('green');
    }
  );

  it(
    'getDisplayColor() should color unknown goldenrod'
    , () => expect(service.getDisplayColor({name: 'unknown'})).toBe('goldenrod')
  );
});
