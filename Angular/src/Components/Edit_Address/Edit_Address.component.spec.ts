/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Edit_AddressComponent } from './Edit_Address.component';

describe('Edit_AddressComponent', () => {
  let component: Edit_AddressComponent;
  let fixture: ComponentFixture<Edit_AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit_AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit_AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
