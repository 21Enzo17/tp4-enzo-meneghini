import { Component, Input, ViewChild } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-punto5',
  standalone: true,
  imports: [FormsModule,FormularioComponent, ListaComponent],
  templateUrl: './punto5.component.html',
  styleUrl: './punto5.component.css'
})
export class Punto5Component {
  @ViewChild(FormularioComponent) formulario!: FormularioComponent;

  mostrarFormulario = false;
  idTicket: string = '';

  cambiarVisibilidad(){
    this.mostrarFormulario = !this.mostrarFormulario;
    if (this.mostrarFormulario) {
      this.idTicket = '';
      this.formulario.reiniciarFormulario();
    }
  }

  editarTicket(id: string){
    this.mostrarFormulario = true;
    this.idTicket = id;
  }
  
}
