import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
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
