import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyperson = ManyPerson;
}
