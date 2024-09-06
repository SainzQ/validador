import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarRFCComponent } from './validar-rfc.component';

describe('ValidarRFCComponent', () => {
  let component: ValidarRFCComponent;
  let fixture: ComponentFixture<ValidarRFCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarRFCComponent]
    });
    fixture = TestBed.createComponent(ValidarRFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
