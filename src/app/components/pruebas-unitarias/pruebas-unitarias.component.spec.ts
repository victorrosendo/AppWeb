import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasUnitariasComponent } from './pruebas-unitarias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PruebasUnitariasComponent', () => {
  let component: PruebasUnitariasComponent;
  let fixture: ComponentFixture<PruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasUnitariasComponent,FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.miFormulario.valid).toBeFalsy();
  });

  it('should set resultado after submitting the form', () => {
    component.miFormulario.setValue({ numero1: 3, numero2: 4 });
    component.sumarDesdeFormulario();
    expect(component.resultado).toBe(7);
  });

  it('should display the resultado in the template', () => {
    component.resultado = 10;
    fixture.detectChanges();
    const resultadoElement = fixture.nativeElement.querySelector('div');
    expect(resultadoElement.textContent).toContain('10');
  });
});
