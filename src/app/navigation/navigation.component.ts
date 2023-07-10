import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private readonly _authService: AuthService) {

  }

  // если пользователь не авторизован и нажал на аккаунт
  public openCabinet(): void {
    this._authService.modalOpenness$.next(!this._authService.isModalOpen);
  }
}
