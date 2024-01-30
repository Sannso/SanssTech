import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TycComponent } from './pages/tyc/tyc.component';
import { PdpComponent } from './pages/pdp/pdp.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'terminos-y-condiciones', component: TycComponent},
    {path: 'politica-de-privacidad', component: PdpComponent}
];
