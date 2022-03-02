import { createAction, props } from '@ngrx/store';

export const loadTickets = createAction(
  '[Ticket] Load Tickets'
);

export const loadTicketsSuccess = createAction(
  '[Ticket] Load Tickets Success',
  props<{ data: any }>()
);

export const loadTicketsFailure = createAction(
  '[Ticket] Load Tickets Failure',
  props<{ error: any }>()
);


export const loadTicket = createAction(
  '[Ticket] Load Ticket',
  props<{ data: { ticketId: number; } }>()
);

export const loadTicketSuccess = createAction(
  '[Ticket] Load Ticket Success',
  props<{ data: any }>()
);

export const loadTicketFailure = createAction(
  '[Ticket] Load Ticket Failure',
  props<{ error: any }>()
);
