import * as fromTicket from './ticket.reducer';
import { selectTicketState } from './ticket.selectors';

describe('Ticket Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTicketState({
      [fromTicket.ticketFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
