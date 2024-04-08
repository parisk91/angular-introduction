import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-datatable/simple-datatable.component';
import { ePerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-template-driven-form-example',
  standalone: true,
  imports: [EpersonTemplateDrivenFormComponent,
  PersonTableComponent,
  SimpleDataTableComponent],
  templateUrl: './template-driven-form-example.component.html',
  styleUrl: './template-driven-form-example.component.css'
})
export class TemplateDrivenFormExampleComponent {
  currentPerson = EPerson;
  persons: Eperson[] = []

  onPerson(person: ePerson) {
    this.currentPerson = person;
  this.persons.push(person)
  }
  
}
