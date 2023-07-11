import {Component, OnInit} from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly _apollo: Apollo) {
  }

  public ngOnInit(): void {
    this._apollo
      .watchQuery<any>({
        query: gql`
        query GetChapters {
          chapters {
            id
            name
            order
            successRate
            subChapters {
              name
            }
          }
        }
      `,
      })
      .valueChanges.subscribe(({data}): void  => {
        console.log(data);
      });
  }
}
