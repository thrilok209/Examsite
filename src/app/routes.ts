import { Routes } from '@angular/router';
import { QuestionViewingPageComponent } from './pages/question-viewing-page/question-viewing-page.component';
import { AddQuestionsPageComponent } from './admin/add-questions-page/add-questions-page.component';
import { ScoreReviewingPageComponent } from './pages/score-reviewing-page/score-reviewing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { WaitingPageComponent } from './pages/waiting-page/waiting-page.component';
import { TestRemotePageComponent } from './admin/test-remote-page/test-remote-page.component';
import { AddAnstoquePageComponent } from './admin/add-anstoque-page/add-anstoque-page.component';
import { AddUsersToTestComponent } from './admin/add-users-to-test/add-users-to-test.component'
import { QueOptionsPageComponent } from './admin/que-options-page/que-options-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { TestSelectionPageComponent } from './admin/test-selection-page/test-selection-page.component'
import { QuestionAnswersViewingPageComponent } from './pages/question-answers-viewing-page/question-answers-viewing-page.component'
import { ChangeQuestionsPageComponent } from './admin/change-questions-page/change-questions-page.component'



import { AuthCheckGuard }                from './auth-check.guard'
import { AdminCheckGuard }                from './guard/admin-check.guard'




export const routes: Routes = [
  {path: '', redirectTo: 'wait' , pathMatch: 'full'},
  { path: 'view',
    component: QuestionViewingPageComponent,
     canActivate: [AuthCheckGuard],
  },
  { path: 'remote',
    component: TestRemotePageComponent,
     canActivate: [AuthCheckGuard],
  },
  { path: 'score',
    component: ScoreReviewingPageComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'wait',
    component: WaitingPageComponent,
     canActivate: [AuthCheckGuard],
  },
  { path: 'addquestions',
    component: AddQuestionsPageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'addAns',
    component: AddAnstoquePageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'addUser',
    component: AddUsersToTestComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'checkAdminOptions',
    component: QueOptionsPageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'signup',
    component: SignupPageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'load',
    component: TestSelectionPageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'viewAnswers',
    component: QuestionAnswersViewingPageComponent,
    //  canActivate: [AuthCheckGuard],
  },
  { path: 'change',
    component: ChangeQuestionsPageComponent,
    //  canActivate: [AuthCheckGuard],
  },



];
