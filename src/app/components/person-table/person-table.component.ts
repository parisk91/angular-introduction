import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Karanasios',
    surName: 'Paris',
    age: 32,
    email: 'paris_k91@hotmail.com'
   };
}
