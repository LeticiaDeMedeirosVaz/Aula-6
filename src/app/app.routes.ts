import { Routes } from '@angular/router';
import { MeusComponentes } from './Componentes/meus-componentes/meus-componentes';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    
    {
        path: '',
        component: MeusComponentes, 
},

    {
         
        path: 'MeusComponentes',
        loadComponent: () => import('./Componentes/meus-componentes/meus-componentes').then(m => m.MeusComponentes),
        canActivate: [authGuard]
    },

        {
        path: '**',
        redirectTo:''
    }
    

];

