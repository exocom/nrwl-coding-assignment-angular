import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TicketActions from './ticket.actions';
import { BackendService } from '../../services/backend.service';


@Injectable()
export class TicketEffects {

  loadTickets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.loadTickets),
      concatMap(() => {
        return this.backendService.tickets().pipe(
          map(data => TicketActions.loadTicketsSuccess({data})),
          catchError(error => of(TicketActions.loadTicketsFailure({error})))
        );
      })
    );
  });

  loadTicket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TicketActions.loadTicket),
      concatMap(({data: {ticketId}}) => {
        return this.backendService.ticket(ticketId).pipe(
          map(data => TicketActions.loadTicketSuccess({data})),
          catchError(error => of(TicketActions.loadTicketFailure({error})))
        );
      })
    );
  });


  constructor(private actions$: Actions, private backendService: BackendService) {
  }

}
