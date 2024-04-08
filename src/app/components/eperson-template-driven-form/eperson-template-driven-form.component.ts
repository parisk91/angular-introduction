import { Component, EventEmitter, Output, output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'
import { ePerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-eperson-template-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<ePerson>()
  onSubmit(value:any) {
    console.log(value as ePerson)
    this.person.emit(value as ePerson);
  }
}
