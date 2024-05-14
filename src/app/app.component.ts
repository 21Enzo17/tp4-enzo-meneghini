import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Punto1Component } from "./components/punto1/punto1.component";
import { Punto2Component } from './components/punto2/punto2.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Punto1Component, Punto2Component, NavComponent, RouterModule]
})
export class AppComponent {
  title = 'tp4-enzo-meneghini';
}
