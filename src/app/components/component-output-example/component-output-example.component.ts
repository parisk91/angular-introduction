import { Component } from '@angular/core';
import { ManyPerson, ePerson } from 'src/app/shared/interfaces/person';
import { SimpleDataTableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  onPersonClicked(person: ePerson) {
    console.log(person);
    alert(this.personTemplate(person))
  }

  personTemplate(person : ePerson) {
    return `
    Person Details:
    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `;
  }
}
