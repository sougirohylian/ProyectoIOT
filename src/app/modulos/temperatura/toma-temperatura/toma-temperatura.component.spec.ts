import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaTemperaturaComponent } from './toma-temperatura.component';

describe('TomaTemperaturaComponent', () => {
  let component: TomaTemperaturaComponent;
  let fixture: ComponentFixture<TomaTemperaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaTemperaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
