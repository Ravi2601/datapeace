import { TestBed } from '@angular/core/testing';

import { TableService } from './table.service';

xdescribe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableService = TestBed.get(TableService);
    expect(service).toBeTruthy();
  });
});
