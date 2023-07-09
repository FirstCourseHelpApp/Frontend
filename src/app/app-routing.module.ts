import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseArticleComponent } from './course/course-article/course-article.component';
import { CourseTestComponent } from './course/course-test/course-test.component';
import { CourseChapterComponent } from './course/course-chapter/course-chapter.component';
import {CourseHomeComponent} from './course/course-home/course-home.component';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {CharactersComponent} from "./characters/characters.component";
import {MapsComponent} from "./maps/maps.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dictionary',
    component: DictionaryComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: '',
        component: CourseHomeComponent
      },
      {
        path: 'chapter',
        component: CourseChapterComponent
      },
      {
        path: 'article',
        component: CourseArticleComponent,
      },
      {
        path: 'test',
        component: CourseTestComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
