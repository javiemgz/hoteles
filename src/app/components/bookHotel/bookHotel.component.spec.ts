/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookHotelComponent } from './bookHotel.component';

describe('BookHotelComponent', () => {
  let component: BookHotelComponent;
  let fixture: ComponentFixture<BookHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
