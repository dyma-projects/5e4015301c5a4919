import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercie1Component } from './exercie1.component';

describe('Exercie1Component', () => {
  let component: Exercie1Component;
  let fixture: ComponentFixture<Exercie1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercie1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
