import { Component, OnInit } from '@angular/core';
import { ITour } from 'src/app/models/ITour';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];
  constructor(private ticketService: TicketService) {}
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
    });
  }
}
