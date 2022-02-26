import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketPageRoutingModule } from './ticket-page-routing.module';
import { TicketPageComponent } from './ticket-page.component';


@NgModule({
  declarations: [
    TicketPageComponent
  ],
  imports: [
    CommonModule,
    TicketPageRoutingModule
  ],
  exports: [
    TicketPageComponent
  ]
})
export class TicketPageModule { }
