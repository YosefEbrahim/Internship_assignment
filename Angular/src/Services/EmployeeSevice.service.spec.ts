/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeSeviceService } from './EmployeeSevice.service';

describe('Service: EmployeeSevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeSeviceService]
    });
  });

  it('should ...', inject([EmployeeSeviceService], (service: EmployeeSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
