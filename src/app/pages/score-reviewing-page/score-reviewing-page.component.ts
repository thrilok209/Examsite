import { Component, OnInit } from '@angular/core';
import { QuestionViewingPageComponent } from '../question-viewing-page/question-viewing-page.component';
import {QuestionDataService} from '../../question-data.service'
import {Router} from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';

import {  Observable} from 'rxjs';

@Component({
  selector: 'app-score-reviewing-page',
  templateUrl: './score-reviewing-page.component.html',
  styleUrls: ['./score-reviewing-page.component.css']
})
export class ScoreReviewingPageComponent implements OnInit {
  correctOptions=["a","b","c","a","b","c","a","b","c","a","b","c"];
  studentOptions=["a","b","c","a","c","c","b","b","c"];
  phyMarks=0;
  chemMarks=0;
  mathMarks=0;
  totalScore=0;
  negativeMarks=0;
  unTemptedQuestions;
  testScoreRef: AngularFireList<any>;
  testsRef: AngularFireList<any>;
  usersRef: AngularFireList<any>;
  testLoadRef:AngularFireObject<any>;
    item: Observable<any>;
  constructor(db: AngularFireDatabase ,private router: Router,public queDB:QuestionDataService ,private question:QuestionViewingPageComponent ) {
    this.testScoreRef = db.list('testScore')
    this.testsRef = db.list('TESTS')
    this.usersRef = db.list('users')
    this.testLoadRef = db.object('loadedTest')


   }

  ngOnInit() {

    this.studentOptions=this.queDB.studentOptions
    this.correctOptions=this.queDB.questionCorrectOptions


    for(let i=0; i<this.correctOptions.length;i++){
      // console.log("here near")
      if(this.studentOptions[i]!="" ){
        console.log(this.studentOptions[i])
        if(this.studentOptions[i]!=undefined){


        // if(i>=(this.question.phyQuestionsStartingNumber-1) && i<(this.question.chemQuestionsStartingNumber-1)){
        //   if(this.studentOptions[i]==this.correctOptions[i]){
        //     this.phyMarks=this.phyMarks+4;
        //     this.totalScore=this.totalScore+4;
        //   }
        //   if(this.studentOptions[i]!=this.correctOptions[i]){
        //     this.phyMarks=this.phyMarks-1;
        //     this.negativeMarks++;
        //   }
        // }
        // if(i>=(this.question.chemQuestionsStartingNumber-1) && i<(this.question.mathQuestionsStartingNumber-1)){
        //   if(this.studentOptions[i]==this.correctOptions[i]){
        //     this.chemMarks=this.chemMarks+4;
        //     this.totalScore=this.totalScore+4;
        //   }
        //   if(this.studentOptions[i]!=this.correctOptions[i]){
        //     this.chemMarks=this.chemMarks-1;
        //     this.negativeMarks++;
        //   }
        // }
        // if(i>=(this.question.mathQuestionsStartingNumber-1) && i<(this.question.totalQuestionsNumber)){
        //   if(this.studentOptions[i]==this.correctOptions[i]){
        //     this.mathMarks=this.mathMarks+4;
        //     this.totalScore=this.totalScore+4;
        //   }
        //   if(this.studentOptions[i]!=this.correctOptions[i]){
        //     this.mathMarks=this.mathMarks-1;
        //     this.negativeMarks++;
        //   }
        // }

        if(this.studentOptions[i]==this.correctOptions[i]){
          // this.mathMarks=this.mathMarks+4;
          this.totalScore=this.totalScore+4;
        }
        if(this.studentOptions[i]!=this.correctOptions[i]){
          // this.mathMarks=this.mathMarks-1;
          this.negativeMarks++;
        }


      }
    }
    }

    this.totalScore=  this.totalScore-this.negativeMarks
    this.addScoreToDB()
  }
  addScoreToDB(){
    let count=0;
    if(localStorage.getItem("storeOpt")=="storeTrue"){
      localStorage.setItem('storeOpt',"storeFalse")


      this.testsRef.snapshotChanges().subscribe(tests=>{
        let allStudentsOptions=[]
        tests.forEach(test=>{
          if(test.key==localStorage.getItem('testKEY')){
            if(test.payload.val().studentOptions!=undefined){

              allStudentsOptions=test.payload.val().studentOptions
            }
            console.log(localStorage.getItem('name'))
            allStudentsOptions.push({'name':localStorage.getItem('name'),'totalScore':this.totalScore , "neg":this.negativeMarks , 'opt':this.studentOptions , 'uid':localStorage.getItem('uid') ,'studentDBkey':localStorage.getItem('userDBKey')})
            this.testsRef.update(localStorage.getItem('testKEY'),{'studentOptions':allStudentsOptions} )
          }
        })
      })
      this.usersRef.snapshotChanges().subscribe(users=>{
        let studentAllTestOptions=[]
        users.forEach(user=>{
          if(localStorage.getItem('userDBKey')==user.key){
            if(user.payload.val().testOptions!=undefined){
              studentAllTestOptions=user.payload.val().testOptions
            }
            studentAllTestOptions.push({'title':localStorage.getItem('titleOfTest'),'totalScore':this.totalScore , "neg":this.negativeMarks , 'opt':this.studentOptions  ,'testDBkey':localStorage.getItem('testKEY')})
            this.usersRef.update(localStorage.getItem('userDBKey'),{testOptions:studentAllTestOptions})
          }
        })
      })
      this.testLoadRef.snapshotChanges().subscribe(test=>{
        let allStudentsOptionsLoad=[]
        if(test.payload.val().studentOptions!=undefined&& count==0){

          allStudentsOptionsLoad=test.payload.val().studentOptions
        }
        if(count==0){
          allStudentsOptionsLoad.push({'name':localStorage.getItem('name'),'totalScore':this.totalScore , "neg":this.negativeMarks , 'opt':this.studentOptions , 'uid':localStorage.getItem('uid') ,'studentDBkey':localStorage.getItem('userDBKey')})
          this.testLoadRef.update({'studentOptions':allStudentsOptionsLoad})
          count++
        }
        console.log(allStudentsOptionsLoad)

      })
      // this.testScoreRef.push({"name":localStorage.getItem('user'),'totalScore':this.totalScore , "neg":this.negativeMarks , 'opt':this.studentOptions})
      localStorage.setItem('storeOpt',"storeFalse")
      // localStorage.removeItem('user')
    }

  }
  logout(){
    this.question.logout()
    this.router.navigate(['login'])
    localStorage.clear()

    // console.log(localStorage.getItem('name'))

  }

  // ngOnInit(){
  //
  // }

}
