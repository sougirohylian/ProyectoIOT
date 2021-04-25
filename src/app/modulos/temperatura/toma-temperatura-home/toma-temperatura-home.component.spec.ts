import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaTemperaturaHomeComponent } from './toma-temperatura-home.component';

describe('TomaTemperaturaHomeComponent', () => {
  let component: TomaTemperaturaHomeComponent;
  let fixture: ComponentFixture<TomaTemperaturaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaTemperaturaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaTemperaturaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
