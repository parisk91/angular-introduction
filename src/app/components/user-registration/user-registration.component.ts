import { group } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  userService = inject(UserService);

  form = new FormGroup({
    givenName: new FormControl("", Validators.required),
    surName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormGroup('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormGroup('', [Validators.required, Validators.minLength(4)]),
  },
  this.passwordConfirmValidator,
);

  passwordConfirmValidator(form: FormGroup) {
    if (form.get('password').value !== form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({passwordMismatch : true });
      return {passwordMismatch : true }
    }
    return {}
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
