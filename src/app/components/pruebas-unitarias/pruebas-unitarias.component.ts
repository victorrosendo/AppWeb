import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * @description
 * Componente de encabezado de la aplicación.
 *
 * Este componente muestra el encabezado con el logotipo y el menú de navegación.
 */
/**
 * @usageNotes
 * 
 * 1. Importa este módulo en tu aplicación principal.
 * 2. Añade el selector `app-encabezado` en tu plantilla para mostrar el encabezado.
 * 3. Añade el selector `app-pie-pagina` para mostrar el pie de página.
 */

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.scss'
})
export class PruebasUnitariasComponent {

  miFormulario!: FormGroup;
  resultado!: number;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero1: ['', Validators.required],
      numero2: ['', Validators.required],
    });
  }

  sumarDesdeFormulario(): void {
    const { numero1, numero2 } = this.miFormulario.value;
    this.sumar(numero1, numero2);
  }

  /**
 * Suma dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números.
 */
  sumar(a: number, b: number): void {
    this.resultado = a + b;
  }

}
