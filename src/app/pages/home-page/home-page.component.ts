import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {
  }
}
