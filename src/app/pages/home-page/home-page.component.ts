import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  tickets = this.backend.tickets().pipe(
    tap(tickets => {
      this.ticketsFormArray.clear();
      tickets
        .map(t => this.fb.group({
          id: [t.id, Validators.required],
          description: [t.description, Validators.required],
          assigneeId: [t.assigneeId],
          completed: [t.completed]
        }))
        .forEach(fg => this.ticketsFormArray.push(fg));
    })
  );
  users = this.backend.users();

  ticketsFormArray = this.fb.array([]);
  formGroup = this.fb.group({
    tickets: this.ticketsFormArray,
  })

  constructor(private backend: BackendService, private fb: FormBuilder) {
  }
}
