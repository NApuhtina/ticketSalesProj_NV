import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListRoutingModule } from './ticket-list-routing.module';
import { TicketsComponent } from 'src/app/pages/tickets/tickets.component';
import { HeaderComponent } from 'src/app/pages/tickets/header/header.component';
import { FooterComponent } from 'src/app/pages/tickets/footer/footer.component';
import { TicketListComponent } from 'src/app/pages/tickets/ticket-list/ticket-list.component';
import { AsideComponent } from 'src/app/pages/tickets/aside/aside.component';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TicketsComponent,
    HeaderComponent,
    FooterComponent,
    TicketListComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    TicketListRoutingModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
  ],
})
export class TicketListModule {}
