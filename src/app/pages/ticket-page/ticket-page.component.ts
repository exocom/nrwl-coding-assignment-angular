import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, shareReplay, switchMap, tap } from 'rxjs/operators';
import { BackendService } from '../../services/backend.service';
import { combineLatest } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  ticketId = this.route.params.pipe(pluck('ticketId'), shareReplay());
  ticket = this.ticketId.pipe(
    switchMap(ticketId => this.backend.ticket(ticketId)),
    tap(t => this.formGroup.setValue(t)),
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

  constructor(private route: ActivatedRoute, private backend: BackendService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
