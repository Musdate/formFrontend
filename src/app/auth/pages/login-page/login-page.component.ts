import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private fb          = inject( FormBuilder );
  private AuthService = inject( AuthService );
  private router      = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]]
  });

  login() {
    const { email, password } = this.myForm.value;

    if ( this.myForm.invalid ) {
      Swal.fire({
        title: 'Error',
        text: 'Credenciales incorrectas.',
        icon: 'error'
      });
      return;
    }

    this.AuthService.login(email, password).subscribe({
      next: () => { this.router.navigateByUrl('/dashboard') },
      error: (message) => {
        Swal.fire({
          title: 'Error',
          text: message,
          icon: 'error'
        });
      }
    })
  }

}
