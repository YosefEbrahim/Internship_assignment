/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_AddressComponent } from './Add_Address.component';

describe('Add_AddressComponent', () => {
  let component: Add_AddressComponent;
  let fixture: ComponentFixture<Add_AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
