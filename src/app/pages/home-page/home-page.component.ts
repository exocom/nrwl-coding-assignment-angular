import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  ticketsFormArray = this.fb.array([
    this.fb.group({isComplete: false}),
    this.fb.group({isComplete: true}),
  ]);
  formGroup = this.fb.group({
    tickets: this.ticketsFormArray,
  })

  constructor(private backend: BackendService, private fb: FormBuilder) {
  }
}
