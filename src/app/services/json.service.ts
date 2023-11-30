import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 7156f938-685b-4bb9-b167-61c6acf2b8ea'
    })
  }

  private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-app-3f094.appspot.com/o/personas.json?alt=media&token=380fd8f8-a32f-4d92-873e-eaba5824e52d';
  //variable para guardar la lista obtenida del JSON
  private lista:any;

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  //metodo que se usará para agregar, modificar y eliminar elementos del JSON creado en el Storage de Firebase
  MetodoPersona(listaPersonas:any) {
    console.log(listaPersonas);
    this.http.post(this.jsonUrl,listaPersonas,this.httpOptions).subscribe(
      response => {
        console.log('Archivo JSON sobrescrito con éxito:', response);
      },
      error => {
        console.error('Error al sobrescribir el archivo JSON:', error);
      })
  }
  



}
