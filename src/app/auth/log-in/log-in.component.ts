import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  public logInForm: FormGroup<{
    password: FormControl<string | null>;
    email: FormControl<string | null>
  }> = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private readonly _authService: AuthService) {}

  public onSubmit(): void {
    this._authService.authorizeUser({
      email: this.logInForm.controls.email.value!,
      password: this.logInForm.controls.password.value!
    });
    this._authService.changeOpenness(false);
  }

  public changeAuthType(): void {
    this._authService.changeAuthType();
  }
}
