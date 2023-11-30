import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  // Declaración de variables
  nombre: string = 'Angular';
  edad: number = 25;
  esHabilitado: boolean = true;
  listaDeElementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  VariableA: any;
  correo: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  goToHome(): void {
    console.log("hola: " + this.correo);
    let navigationExtras: NavigationExtras = {
      state: {
        correoEnviado: this.correo,
        claveEnviada: this.clave,
      }
    }
   
    this.router.navigate(['home'], navigationExtras);
    
  }

}
