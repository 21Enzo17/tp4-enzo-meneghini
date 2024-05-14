import { Routes, RouterModule } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { FormularioComponent } from './components/formulario/formulario.component';


export const routes: Routes = [
    { path: 'punto1', component: Punto1Component },
    {path:'punto2', component: Punto2Component},
    {path: 'punto5', component: Punto5Component},
    {path: '', redirectTo: 'punto1', pathMatch: 'full' }
];
