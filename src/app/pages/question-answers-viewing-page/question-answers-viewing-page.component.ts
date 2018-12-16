import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase, AngularFireList,AngularFireObject  } from '@angular/fire/database';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {QuestionDataService} from '../../question-data.service';
@Component({
  selector: 'app-question-answers-viewing-page',
  templateUrl: './question-answers-viewing-page.component.html',
  styleUrls: ['./question-answers-viewing-page.component.css']
})
export class QuestionAnswersViewingPageComponent implements OnInit {
  totalQuestions;
  totalStudentOptions;
  totalCorrectOtp;
  totalMarks;
  constructor(private auth:AngularFireAuth, public questionStuDB:QuestionDataService  , private storage: AngularFireStorage , private san: DomSanitizer, db: AngularFireDatabase , private router: Router) {

  }
  ngOnInit() {
    this.totalQuestions=this.questionStuDB.totalQuestions
    this.totalStudentOptions=this.questionStuDB.studentOptions
    this.totalCorrectOtp=this.questionStuDB.questionCorrectOptions
    console.log(this.totalStudentOptions)
  }
  logout(){
    this.auth.auth.signOut()
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
