import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CourseArticleComponent } from './course/course-article/course-article.component';
import { CourseTestComponent } from './course/course-test/course-test.component';
import { CourseComponent } from './course/course.component';
import { AppRoutingModule } from './app-routing.module';
import {CourseHomeComponent} from './course/course-home/course-home.component';
import {CourseChapterComponent} from './course/course-chapter/course-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CourseArticleComponent,
    CourseTestComponent,
    CourseComponent,
    CourseHomeComponent,
    CourseChapterComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
    AppRoutingModule
],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
