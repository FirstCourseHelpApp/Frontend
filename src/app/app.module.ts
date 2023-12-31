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
import { TuiInputModule, TuiInputYearModule, TuiRadioLabeledModule } from '@taiga-ui/kit';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { CharactersComponent } from './characters/characters.component';
import { MapsComponent } from './maps/maps.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { AuthComponent } from './auth/auth.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FoodMapComponent } from './maps/food-map/food-map.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import {CabinetComponent} from "./navigation/cabinet/cabinet.component";

const mapConfig: YaConfig = {
  apikey: '8c2cdcb1-d99b-4933-bae4-58cac30e0d02',
  lang: 'ru_RU',
};

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
    AuthComponent,
    FoodMapComponent,
    CabinetComponent
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
    HttpClientModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
