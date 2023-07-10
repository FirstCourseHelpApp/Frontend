import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public signUpForm: FormGroup<{
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
    email: FormControl<string | null>
  }> = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private readonly _authService: AuthService) {
  }

  public onSubmit(): void {
    console.log(this.signUpForm);
    this._authService.changeOpenness(false);
  }

  public changeAuthType(): void {
    this._authService.changeAuthType();
  }
}
