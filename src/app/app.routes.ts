import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';

const LA_RUTA:Routes = [
    {
        path: '',
        component: HomeComponent
       },
       {
        path: 'home',
        component: HomeComponent
       },
       {
        path: 'facturas',
        component: RegistroComponent
       },
       {
        path: '**',
        component: ErrorComponent
       }
      ];
      
      export const RUTAS = RouterModule.forRoot(LA_RUTA);