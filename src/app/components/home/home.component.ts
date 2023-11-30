import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  correo: string = '';
  clave: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['correoEnviado'];
        this.clave = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviada'];
      }
    })
  }

  ngOnInit(): void {
    
  }
}
