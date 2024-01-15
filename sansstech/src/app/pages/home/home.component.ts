import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    ToolbarModule,
    FormsModule,
    CardModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  propiedades:any = ["Edificios", "Urbanizaciones", "Condominios"];
  propiedad:string = this.propiedades[0];
  indice:number = 0;
  cards:any = [
    {
      'id' : 0,
      'icon' : 'pi-cloud-download',
      'title' : 'Sin Descargas',
      'description': 'Utiliza el sistema desde cualquier dispositivo, y desde cualquier lugar; solo necesitas acceso a internet!'
    },
    {
      'id' : 1,
      'icon' : 'pi-whatsapp',
      'title' : 'Soporte gratis 24/7',
      'description': 'Recibe ayuda en cualquier momento por parte de nosotros, por mail, telefono o Whatsapp'
    },
    {
      'id' : 2,
      'icon' : 'pi-shield',
      'title' : 'Mejore la seguridad de su información',
      'description': 'Todos sus datos estan resguardados en la nube, gracias a la tecnologia de AWS.'
    },
    {
      'id' : 3,
      'icon' : 'pi-sync',
      'title' : 'Sistema actualizado constantemente',
      'description': 'Recibe mejoras gratis cada vez que se actualice el sistema!'
    }
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.indice = this.indice + 1;
      if(this.indice == 3){this.indice = 0}
      this.propiedad = this.propiedades[this.indice];
    }, 2000); // Cambiar cada 2 segundos
  }
}
