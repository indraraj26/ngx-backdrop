import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBackdropComponent } from './ngx-backdrop.component';

describe('NgxBackdropComponent', () => {
  let component: NgxBackdropComponent;
  let fixture: ComponentFixture<NgxBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBackdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
