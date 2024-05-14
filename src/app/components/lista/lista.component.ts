import { Component, Output, EventEmitter } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { TipoEspectadorPipe } from '../../pipes/tipo-espectador.pipe';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, TipoEspectadorPipe],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Output() editarTicket = new EventEmitter<string>();

  tickets: Ticket[] = [];
  
  constructor (private ticketService: TicketService) {}


  ngOnInit(): void {
    this.tickets = this.ticketService.obtenerTickets();
  
    
  }

  eliminarTicket(id: string) {
    this.ticketService.eliminarTicket(id);
    this.tickets = this.ticketService.obtenerTickets();
  }


}
