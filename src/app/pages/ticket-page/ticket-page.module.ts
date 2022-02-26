import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketPageRoutingModule } from './ticket-page-routing.module';
import { TicketPageComponent } from './ticket-page.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TicketPageComponent
  ],
  imports: [
    CommonModule,
    TicketPageRoutingModule,
    ToggleButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    TicketPageComponent
  ]
})
export class TicketPageModule {
}
