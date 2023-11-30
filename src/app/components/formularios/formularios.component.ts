import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent {

  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
       // Otros campos con validadores...
    });
  }

  submitForm() {
    if (this.miFormulario.valid) {
      // Procesar los datos del formulario

      //asi puedo obtener los datos d eun campo del formulario 
      console.log("Resultado: " + this.miFormulario.get('nombre')!.value);
    }
  }

  onButtonClick() {
    // Lógica del evento
  }
  

  onInputChange(event: any) {
    // Acceder a event.target.value para obtener el valor del campo de entrada
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // Se activa cuando hay cambios en las propiedades de entrada
  }
  
}
