import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Apollo, gql} from "apollo-angular";
import {FormControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public modalOpenness$: Subject<boolean> = new Subject<boolean>();
  public changingAuthType$: Subject<undefined> = new Subject<undefined>();
  public isModalOpen: boolean = false;

  constructor(private readonly _apollo: Apollo) {}

  public registerUser(easy_input: {email: string, password: string}): void {
    const input = {
      input: {
        email: easy_input.email,
        password: easy_input.password
      }
    };
    this._apollo.mutate<{ registerUser: {string: string} }>({
      mutation: gql`
        mutation RegisterUser($input: RegisterUserInput!) {
          registerUser(input: $input) {
            string
          }
        }
      `,
      variables: {input}
    }).subscribe(({data}): void => {
      window.localStorage["jwt"] = data!.registerUser.string;
      this.parseJwt();
    });
  }

  public authorizeUser(easy_input: {email: string, password: string}): void {
    const input = {
      input: {
        email: easy_input.email,
        password: easy_input.password
      }
    };
    this._apollo.mutate<any>({
      mutation: gql`
        mutation AuthorizeUser($input: AuthorizeUserInput!) {
          authorizeUser(input: $input) {
            string
          }
        }
      `,
      variables: {input}
    }).subscribe(({data}): void => {
      window.localStorage["jwt"] = data!.authorizeUser.string;
      this.parseJwt();
    });
  }

  public getMe(): any {
    const input: string | null = window.localStorage.getItem("userId");
    if (!input) {
      return;
    }
    this._apollo
      .watchQuery<any>({
        query: gql`
        query GetUser($input: UUID!) {
          user(id: $input) {
            email
          }
        }
      `,
      variables: {input}
    }).valueChanges.subscribe(({data}): void => {
      return data;
    });
  }

  public signOut(): void {
    window.localStorage.clear();
  }

  public changeOpenness(openness: boolean): void {
    this.modalOpenness$.next(openness);
  }

  public changeAuthType(): void {
    this.changingAuthType$.next(undefined);
  }

  public parseJwt(): void {
    const token: string = window.localStorage["jwt"];
    let base64Url: string = token.split('.')[1];
    let base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload: string = decodeURIComponent(window.atob(base64)
      .split('').map(function (c: string): string {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    window.localStorage["userId"] = JSON.parse(jsonPayload).sub;
  }
}
