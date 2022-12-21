import { Component } from '@angular/core';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app';
  constructor() {
    this.title= environment.isAdmin==='true' ? 'This is an admin app':' Client app running';
  }
}
