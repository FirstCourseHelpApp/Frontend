import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {
  constructor(private readonly _authService: AuthService) {}

  public signOut(): void {
    this._authService.signOut();
  }
}
