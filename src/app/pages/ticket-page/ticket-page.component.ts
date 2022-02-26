import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, pluck, shareReplay, switchMap, tap } from 'rxjs/operators';
import { BackendService } from '../../services/backend.service';
import { combineLatest, Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit, OnDestroy {
  ticketId = this.route.params.pipe(pluck('ticketId'), shareReplay());
  ticket = this.ticketId.pipe(
    switchMap(ticketId => this.backend.ticket(ticketId)),
    tap(t => this.formGroup.reset(t, {onlySelf: true, emitEvent: false})),
  );
  users = this.backend.users();
  ticketWithUsers = combineLatest([this.ticket, this.users]).pipe(
    map(([ticket, users]) => {
      return {...ticket, assignee: users.find(({id}) => ticket.assigneeId)};
    })
  );

  formGroup = this.fb.group({
    id: [null, Validators.required],
    description: [null, Validators.required],
    assigneeId: [null],
    completed: [false]
  })

  private subs: Array<Subscription> = [];

  constructor(private route: ActivatedRoute, private backend: BackendService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const sub1 = this.formGroup.valueChanges.pipe(
      filter(() => this.formGroup.valid),
      switchMap((ticket) => this.backend.update(ticket.id, {...ticket, id: undefined}))
    ).subscribe((ticket) => {
      console.log("Saved");
    });

    this.subs.push(sub1);
  }

  ngOnDestroy(): void {
    this.subs?.forEach(s => s?.unsubscribe());
  }

}
