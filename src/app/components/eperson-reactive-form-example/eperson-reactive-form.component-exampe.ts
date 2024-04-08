import { Component, EventEmitter, Output } from '@angular/core';
import { Person, ePerson } from 'src/app/shared/interfaces/person';
import { SimpleDataTableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eperson-reactive-form',
  standalone: true,
  imports: [SimpleDataTableComponent, EpersonReactiveFormComponent, PersonTableComponent],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<ePerson>();

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl (18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)

  })

  currentPerson: ePerson;
  persons: ePerson[] = [];

  onPerson(person: ePerson) {
    this.currentPerson = person;
    this.persons.push( person );
  }
}
