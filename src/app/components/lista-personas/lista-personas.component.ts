import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.scss',
  providers: [JsonService]
})
export class ListaPersonasComponent implements OnInit{
  //variable para guardar los datos del JSON
  personas: any;
  nuevaPersona: any;
  //importación del servicio en el constructor para poder usar sus elementos
  constructor(private jsonService: JsonService) {}

  //implementación del ngOninit
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.personas = data;
    });
  }

  addPerson(){
    //nueva persona estática
    const nueva : any =  {
      id: 55,
      nombre: "Josefa",
      edad: 25
    };
    //lo agregamos a la lista
    this.personas.push(nueva);  
    //llamamos al metodo del servicio que realizará la sobrescritura dle JSON  
    this.jsonService.MetodoPersona(this.personas);
  }

  eliminar(persona:any){
    const index = this.personas.findIndex((elemento:any) =>
      elemento.id == persona.id
    );
    
    if (index !== -1) {
      // Si el elemento existe, eliminarlo
      this.personas.splice(index, 1);
      this.jsonService.MetodoPersona(this.personas);
      
    } else {
      // Si el elemento no existe
      // Muestra una alerta simple utilizando el servicio window
      window.alert('El elemento de la lista no existe');
    }
  }

  modificar(persona:any){
    const index = this.personas.findIndex((elemento:any) =>
      elemento.id == persona.id
    );

    if (index !== -1) {
      // Si el elemento existe, modificarlo
      const nueva : any =  {
        nombre: "Alegría",
        edad: 82
      };
      this.personas[index] = { ...this.personas[index], ...nueva };
      this.jsonService.MetodoPersona(this.personas);
      
    } else {
      // Si el elemento no existe
      // Muestra una alerta simple utilizando el servicio window
      window.alert('El elemento de la lista no existe');
    }
  }

  

}
