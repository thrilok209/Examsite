import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {QuestionDataService} from './question-data.service'

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CountdownModule } from 'ngx-countdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {HttpClientModule} from '@angular/common/http';
import { QuestionViewingPageComponent } from './pages/question-viewing-page/question-viewing-page.component';
import { AddQuestionsPageComponent } from './admin/add-questions-page/add-questions-page.component';
import { ScoreReviewingPageComponent } from './pages/score-reviewing-page/score-reviewing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { WaitingPageComponent } from './pages/waiting-page/waiting-page.component';
import { TestRemotePageComponent } from './admin/test-remote-page/test-remote-page.component';
import { AddAnstoquePageComponent } from './admin/add-anstoque-page/add-anstoque-page.component';
import { AddingQuestionService } from './admin/adding-question.service';
import { AddUsersToTestComponent } from './admin/add-users-to-test/add-users-to-test.component';
import { QueOptionsPageComponent } from './admin/que-options-page/que-options-page.component'
// import { SimpleTimer } from 'ng2-simple-timer';

@NgModule({
  declarations: [
    AppComponent,
    QuestionViewingPageComponent,
    AddQuestionsPageComponent,
    ScoreReviewingPageComponent,
    LoginComponent,
    WaitingPageComponent,
    TestRemotePageComponent,
    AddAnstoquePageComponent,
    AddUsersToTestComponent,
    QueOptionsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AppBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule ,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    CountdownModule,
    NgMultiSelectDropDownModule.forRoot(),
    // SimpleTimer

  ],
  providers: [QuestionDataService,QuestionViewingPageComponent,AddAnstoquePageComponent , AddingQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
