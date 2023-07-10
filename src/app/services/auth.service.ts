import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public modalOpenness$: Subject<boolean> = new Subject<boolean>();
  public changingAuthType$: Subject<undefined> = new Subject<undefined>();
  public isModalOpen: boolean = false;

  public changeOpenness(openness: boolean = false): void {
    this.modalOpenness$.next(openness);
  }

  public changeAuthType(): void {
    this.changingAuthType$.next(undefined);
  }
}
