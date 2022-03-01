import { createFeatureSelector } from '@ngrx/store';
import * as fromTicket from './ticket.reducer';

export const selectTicketState = createFeatureSelector<fromTicket.State>(
  fromTicket.ticketFeatureKey
);
