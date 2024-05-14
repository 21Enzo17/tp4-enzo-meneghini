import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];


  constructor() { this.tickets = [
      new Ticket('1', '12345678', 100, 'l', new Date(), 80),
      new Ticket('2', '87654321', 200, 'e', new Date(), 200),
      new Ticket('3', '23456789', 150, 'l', new Date(), 120),
      new Ticket('4', '98765432', 250, 'e', new Date(), 220),
      new Ticket('5', '34567891', 200, 'l', new Date(), 160),
      new Ticket('6', '19876543', 300, 'e', new Date(), 240),
      new Ticket('7', '45678912', 250, 'l', new Date(), 200),
      new Ticket('8', '21987654', 350, 'e', new Date(), 260),
      new Ticket('9', '56789123', 300, 'l', new Date(), 240),
      new Ticket('10', '32198765', 400, 'e', new Date(), 280),
      new Ticket('11', '67891234', 350, 'l', new Date(), 280),
      new Ticket('12', '43219876', 450, 'e', new Date(), 300)
    ];
  }

  agregarTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  obtenerTickets() {
    return this.tickets;
  }

  obtenerTicket(id: string) {
    return this.tickets.find(ticket => ticket.id === id);
  }

  eliminarTicket(id: string) {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }

  modificarTicket(ticket: Ticket) {
    let index = this.tickets.findIndex(t => t.id === ticket.id);
    this.tickets[index] = ticket;
  }

  
}
