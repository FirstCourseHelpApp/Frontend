import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseArticleComponent } from './course/course-article/course-article.component';
import { CourseTestComponent } from './course/course-test/course-test.component';
import { CourseChapterComponent } from './course/course-chapter/course-chapter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
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
