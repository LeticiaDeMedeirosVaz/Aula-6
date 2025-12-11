import { Routes } from '@angular/router';
import { Home } from './Componentes/meus-componentes/home';
import { Login } from './Componentes/login';
import { Dashboard } from './Componentes/meus-componentes/dashboard';
import { authGuard } from './guards/auth-guard';
import { Lista } from './Componentes/lista/lista';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
        
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'lista',
        component: Lista,
        canActivate: [authGuard]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./Componentes/meus-componentes/dashboard').then(m => m.Dashboard),
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
 

