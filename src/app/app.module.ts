import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
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
import { CourseHomeComponent } from './course/course-home/course-home.component';
import { CourseChapterComponent } from './course/course-chapter/course-chapter.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TuiInputModule, TuiInputYearModule, TuiRadioLabeledModule} from '@taiga-ui/kit';
import { DictionaryComponent } from "./dictionary/dictionary.component";
import { CharactersComponent } from "./characters/characters.component";
import { MapsComponent } from "./maps/maps.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LogInComponent } from "./auth/log-in/log-in.component";
import {ComponentHostDirective} from "./directives/component-host.directive";
import {AuthComponent} from "./auth/auth.component";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CourseArticleComponent,
    CourseTestComponent,
    CourseComponent,
    CourseHomeComponent,
    CourseChapterComponent,
    FooterComponent,
    DictionaryComponent,
    CharactersComponent,
    MapsComponent,
    SignUpComponent,
    LogInComponent,
    ComponentHostDirective,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiRadioLabeledModule,
    TuiInputYearModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
