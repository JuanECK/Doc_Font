import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Clientes } from './business/clientes/clientes';
import { Dashboard } from './business/dashboard/dashboard';
import { Prueba } from './business/prueba/prueba';
import { Layout } from './shared/layout/layout';
import { LoginGuardService } from './core/guard/login.guard';

export const routes: Routes = [
    {
        //cuando este logeado y la url coincida con "/" redirigir al componente hijo Dashboard
        path:'', component: Layout, canActivate: [LoginGuardService],
        children:[
            {path:'', redirectTo: 'Dashboard', pathMatch: 'full'},
            {path:'Dashboard', component: Dashboard},
            {path:'once/clientes', component:Clientes},
            {path:'once/prueba', component:Prueba}
        ]
    },
    {
        // al ingresar una URL base en '/login' y si no esta logeado redirigir a login 
        // de lo contrario dirigirlo a Dashboard
        path:'login', component: Login,
    },
    
];


// export const routes: Routes = [
//     {
//         // al ingresar una URL base en '/' y si no esta logeado redirigir a login 
//         // de lo contrario dirigirlo a Dashboard
//         path:'', component: Login,
//     },
//     {
//         //cuando este logeado y la url coincida con "/main" redirigir al componente hijo Dashboard
//         path:'main', component: Layout,
//         // path:'main', component: Layout, canActivate: [LoginGuardService],
//         children:[
//             {path:'', redirectTo: 'Dashboard', pathMatch: 'full'},
//             {path:'Dashboard', component: Dashboard},
//             {path:'once/clientes', component:Clientes},
//             {path:'once/prueba', component:Prueba}
//         ]
//     }

// ];
