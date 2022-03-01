import { createReducer, on } from '@ngrx/store';
import * as TicketActions from './ticket.actions';

export const ticketFeatureKey = 'ticket';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TicketActions.loadTickets, state => state),
  on(TicketActions.loadTicketsSuccess, (state) => state),
  on(TicketActions.loadTicketsFailure, (state) => state),

);

