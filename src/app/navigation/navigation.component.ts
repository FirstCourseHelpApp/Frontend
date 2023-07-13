import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CabinetComponent} from "./cabinet/cabinet.component";
import {ComponentHostDirective} from "../directives/component-host.directive";
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @ViewChild(ComponentHostDirective, {static: true}) public componentsHost!: ComponentHostDirective;

  private _subs: Subscription[] = [];
  private _documentClick$: Observable<Event> = fromEvent(document, 'click');
  private _documentKeyDown$: Observable<Event> = fromEvent(document, 'keydown');

  private isOpenModal: boolean = false;

  constructor(private readonly _authService: AuthService) {}

  public toggleCabinetOpenness(): void {
    this.isOpenModal = !this.isOpenModal;
    if (this.isOpenModal && !window.localStorage["jwt"]) {
      this._authService.changeOpenness(true);
      this.isOpenModal = !this.isOpenModal;
      return;
    } else if (this.isOpenModal) {
      this.renderCabinetComponent();
      setTimeout((): void => {
        this.clickOutsideSubscribe();
        this.keyDownSubscribe();
      }, 100);
    } else {
      this.clearCabinetComponent();
    }
  }

  public renderCabinetComponent(): void {
    const containerRef: ViewContainerRef = this.componentsHost.viewContainerRef;
    containerRef.clear();
    containerRef.createComponent<CabinetComponent>(CabinetComponent);
  }

  public clearCabinetComponent(): void {
    this.componentsHost.viewContainerRef.clear();
    this._subs.forEach((sub: Subscription): void => sub.unsubscribe());
  }

  public clickOutsideSubscribe(): void {
    this._subs.push(
      this._documentClick$.subscribe((evt: Event): void => {
        const authRef: Element = document.querySelector('.auth')!;
        if (!evt.composedPath().includes(authRef!)) {
          this.toggleCabinetOpenness();
        }
      })
    )
  }

  public keyDownSubscribe(): void {
    this._subs.push(
      this._documentKeyDown$.subscribe((evt: Event): void => {
        if ((evt as KeyboardEvent).code === 'Escape') {
          this.toggleCabinetOpenness();
        }
      })
    )
  }
}
