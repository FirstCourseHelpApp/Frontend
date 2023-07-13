import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (window.localStorage.getItem("jwt"))
      return true;

    // TODO: передавать желаемый маршрут
    this._authService.changeOpenness(true);
    return false;
  }
}
