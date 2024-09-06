import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCURPComponent } from './validar-curp.component';

describe('ValidarCURPComponent', () => {
  let component: ValidarCURPComponent;
  let fixture: ComponentFixture<ValidarCURPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarCURPComponent]
    });
    fixture = TestBed.createComponent(ValidarCURPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
