import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentHostDirective} from "./directives/component-host.directive";
import {AuthService} from "./services/auth.service";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ComponentHostDirective, {static: true}) public componentsHost!: ComponentHostDirective;

  constructor(private readonly _authService: AuthService) {}

  public ngOnInit(): void {
    this._authService.modalOpenness$.subscribe((openness: boolean): void => {
      if (openness) {
        this.renderAuthComponent();
      } else {
        this.componentsHost.viewContainerRef.clear();
      }
    });
  }

  public renderAuthComponent(): void {
    const containerRef: ViewContainerRef = this.componentsHost.viewContainerRef;
    containerRef.clear();
    containerRef.createComponent<AuthComponent>(AuthComponent);
  }
}
