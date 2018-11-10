import { Component, OnInit } from '@angular/core';
import { QuestionViewingPageComponent } from '../question-viewing-page/question-viewing-page.component';
import {QuestionDataService} from '../../question-data.service'
import {Router} from '@angular/router';



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
  constructor(private router: Router,public queDB:QuestionDataService ,private question:QuestionViewingPageComponent ) { }

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
  }
  logout(){
    this.question.logout()
    this.router.navigate(['login'])
  }
  // ngOnInit(){
  //
  // }

}
