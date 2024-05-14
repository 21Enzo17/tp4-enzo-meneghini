import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
@Input() id: string = '';
@Output() formSubmit = new EventEmitter<void>();

  ticket : Ticket = new Ticket();

  ngOnInit(): void {
    if(this.id !== ''){
      const ticketObtenido = this.ticketService.obtenerTicket(this.id);
      if (ticketObtenido) {
        console.log(ticketObtenido);
        this.ticket = ticketObtenido;
      } else {
        alert('No se encontró el ticket con id ' + this.id);
      }
    }
  }
  


  constructor (private ticketService: TicketService) {}

 
  reiniciarFormulario() {
    this.ticket = new Ticket();
    this.id = '';
  } 

  agregarTicket() {
    this.ticketService.agregarTicket(this.ticket);
    this.ticket = new Ticket();
    alert('Ticket agregado con éxito');
    this.ngOnInit();
    this.formSubmit.emit();
  }

  eliminarTicket(id: string) {
    this.ticketService.eliminarTicket(id);
  }

  modificarTicket() {
    this.ticketService.modificarTicket(this.ticket);
    this.ticket = new Ticket();
    this.id = '';
    alert('Ticket modificado con éxito');
    this.ngOnInit();
    this.formSubmit.emit();
  }

  calcularPrecio() {
    if(this.ticket.tipoEspectador === 'l'){
      this.ticket.precioCobrado = this.ticket.precioReal * 0.8;

    }
  }
}
