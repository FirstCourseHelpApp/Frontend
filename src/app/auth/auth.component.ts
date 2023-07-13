import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { ComponentHostDirective } from '../directives/component-host.directive';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild(ComponentHostDirective, {static: true}) public componentsHost!: ComponentHostDirective;
  public isRenderedLogIn: boolean = false;

  private _subs: Subscription[] = [];
  private _documentClick$: Observable<Event> = fromEvent(document, 'click');
  private _documentKeyDown$: Observable<Event> = fromEvent(document, 'keydown');

  constructor(private readonly _authService: AuthService) {}

  public ngOnInit(): void {
    this._subs.push(
      this._authService.modalOpenness$.subscribe((isOpening: boolean): void => {
        if (!isOpening) {
          this.closeModal();
        }
      })
    );
    this.changingLogInTypeSubscribe();
    this.loadAuthComponent();

    setTimeout((): void => {
      this.clickOutsideSubscribe();
      this.keyDownSubscribe();
    }, 100);
  }

  public loadAuthComponent(): void {
    const containerRef: ViewContainerRef = this.componentsHost.viewContainerRef;
    containerRef.clear();
    if (this.isRenderedLogIn) {
      containerRef.createComponent<SignUpComponent>(SignUpComponent);
    } else {
      containerRef.createComponent<LogInComponent>(LogInComponent);
    }
  }

  public changingLogInTypeSubscribe(): void {
    this._subs.push(
      this._authService.changingAuthType$.subscribe((): void => {
        this.isRenderedLogIn = !this.isRenderedLogIn;
        this.loadAuthComponent();
      })
    );
  }

  public clickOutsideSubscribe(): void {
    this._subs.push(
      this._documentClick$.subscribe((evt: Event): void => {
        const authRef: Element = document.querySelector('.auth')!;
        if (!evt.composedPath().includes(authRef!)) {
          this.closeModal();
        }
      })
    )
  }

  public keyDownSubscribe(): void {
    this._subs.push(
      this._documentKeyDown$.subscribe((evt: Event): void => {
        if ((evt as KeyboardEvent).code === 'Escape') {
          this.closeModal();
        }
      })
    )
  }

  public closeModal(): void {
    this._subs.forEach((subscription: Subscription) => subscription.unsubscribe());
    this._subs = [];
    this._authService.changeOpenness(false);
  }
}
