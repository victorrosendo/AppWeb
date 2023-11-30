import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { PruebasUnitariasComponent } from './components/pruebas-unitarias/pruebas-unitarias.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';

// path: es el nombre que se usará para llamar a dicha página en nuestro desarrollo
//component: es el nombre del componente designado en la creación, recuerda generar el import cuando lo estes escribiendo

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'formularios', component: FormulariosComponent },
    { path: 'pruebas-unitarias', component: PruebasUnitariasComponent },
    { path: 'lista-personas', component: ListaPersonasComponent },
    //con ester pat se indica cual es la primera página que se debe iniciar junto con la app
    { path: '', redirectTo: 'lista-personas' },
];
