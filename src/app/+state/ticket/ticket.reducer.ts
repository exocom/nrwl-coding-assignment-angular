import { createReducer, on } from '@ngrx/store';
import * as TicketActions from './ticket.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ticket } from '../../services/backend.service';

export const ticketFeatureKey = 'ticket';

export interface State extends EntityState<Ticket> {
  selectedTicketId: string | null;
}

export function selectUserId(a: Ticket): number {
  return a.id;
}

export function sortByName(a: Ticket, b: Ticket): number {
  return a.description.localeCompare(b.description);
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>({
  selectId: selectUserId,
  sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({
  selectedTicketId: null,
});


export const reducer = createReducer(
  initialState,

  on(TicketActions.loadTickets, state => state),
  on(TicketActions.loadTicketsSuccess, (state) => state),
  on(TicketActions.loadTicketsFailure, (state) => state),
);
