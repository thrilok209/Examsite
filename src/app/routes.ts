import { Routes } from '@angular/router';
import { QuestionViewingPageComponent } from './pages/question-viewing-page/question-viewing-page.component';
import { AddQuestionsPageComponent } from './admin/add-questions-page/add-questions-page.component';
import { ScoreReviewingPageComponent } from './pages/score-reviewing-page/score-reviewing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { WaitingPageComponent } from './pages/waiting-page/waiting-page.component';
import { TestRemotePageComponent } from './admin/test-remote-page/test-remote-page.component';
import { AddAnstoquePageComponent } from './admin/add-anstoque-page/add-anstoque-page.component';
import { AddUsersToTestComponent } from './admin/add-users-to-test/add-users-to-test.component'




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

];
