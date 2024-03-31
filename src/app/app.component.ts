import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 name = 'Karanasios';

 person = {
  givenName: 'Karanasios',
  surName: 'Paris',
  age: 32,
  email: 'paris_k91@hotmail.com'
 }
}
