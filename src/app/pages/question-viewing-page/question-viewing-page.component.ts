import { Component, OnInit ,ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList,AngularFireObject  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import {  Observable} from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import {QuestionDataService} from '../../question-data.service';


@Component({
  selector: 'app-question-viewing-page',
  templateUrl: './question-viewing-page.component.html',
  styleUrls: ['./question-viewing-page.component.css']
})
export class QuestionViewingPageComponent implements OnInit {
  examTimer=60*60;
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  items: Observable<any[]>;
  users: AngularFireList<any>;
  profileUrl: Observable<string | null>;
  question:SafeUrl;
  questionOption=null;
  questionNumber=0;
  checkedAnswer={
    a:false,
    b:false,
    c:false,
    d:false,
  }
  chemStudentOptions=[]
  chemQuestions=[];
  phyStudentOptions=[]
  phyQuestions=[];
  mathStudentOptions=[]
  mathQuestions=[];
  totalQuestions=[];
  totalStudentOptions=["a","b","c","a","c","c","b","b","c"];;

  // totalQuestionsNumber=this.questionStuDB.totalNumberOfQuestion;
  totalQuestionsNumber=12;

  chemQuestionsNumber=this.totalQuestionsNumber/3;
  mathQuestionsNumber=this.totalQuestionsNumber/3;
  phyQuestionsNumber=this.totalQuestionsNumber/3;
  chemQuestionsStartingNumber=1*(this.totalQuestionsNumber/3)+1;
  mathQuestionsStartingNumber=2*(this.totalQuestionsNumber/3)+1;
  phyQuestionsStartingNumber=0*(this.totalQuestionsNumber/3)+1;
  userName=""


  saveBtn=false;
  markAsReview=[]
  reviewBtnText=false;
  questionImgLoad=true;
  // questionCorrectAnswere=this.questionStuDB.questionCorrectOptions
  questionCorrectAnswere=["a","b","c","a","b","c","a","b","c","a","b","c",]
  // userData = {
  //  questionCorrectAnsweres:[]
  //
  // }
  timerInt=false;
  usersDetails = []
  itemRef: AngularFireObject<any>;
item: Observable<any>;
titleOfTest=""
  constructor(public questionStuDB:QuestionDataService ,public afAuth: AngularFireAuth , private storage: AngularFireStorage , private san: DomSanitizer, db: AngularFireDatabase , private router: Router) {
  }

  ngOnInit() {

    this.runTest(this.questionStuDB.testType);
    this.totalStudentOptions=JSON.parse(localStorage.getItem("studentOptions"));
    this.markAsReview=JSON.parse(localStorage.getItem("studentOptionsReview"));
    this.markAsReview.length=15;
    this.titleOfTest=this.questionStuDB.titleOfTest
    // console.log("total que "+this.totalQuestionsNumber)
    this.userName=localStorage.getItem("email")

    if(this.questionStuDB.testType=="run"){
      for(let i =0; i<(this.totalQuestionsNumber) ; i++){
      if(i>=(this.phyQuestionsStartingNumber-1) && i<(this.chemQuestionsStartingNumber-1)){
        console.log("phy")
        let ref = this.storage.ref('phy/phy('+(i+1)+').png');
        this.profileUrl = ref.getDownloadURL();
        this.profileUrl.subscribe(x => {
          // console.log(this.chemQuestions)
          this.phyQuestions[i]=x
          this.totalQuestions[i]=x
          if(i==0){
            // console.log("here")
            this.question=x
            // console.log(this.chemQuestions)
          }
        })
      }
      if(i>=(this.chemQuestionsStartingNumber-1) && i<(this.mathQuestionsStartingNumber-1)){
        console.log("chem")
        let ref = this.storage.ref('chem/chem('+(i+2-this.chemQuestionsStartingNumber)+').png');
        this.profileUrl = ref.getDownloadURL();
        this.profileUrl.subscribe(x => {

          this.totalQuestions[i]=x
          this.chemQuestions[i]=x
          if(i==0){
            // console.log("here")
            this.question=x
            console.log(this.chemQuestions)
          }
        })
      }
      if(i>=(this.mathQuestionsStartingNumber-1) && i<(this.totalQuestionsNumber)){
        console.log("math")
        let ref = this.storage.ref('math/math('+(i+2-this.mathQuestionsStartingNumber)+').png');
        this.profileUrl = ref.getDownloadURL();
        this.profileUrl.subscribe(x => {
          // console.log(this.chemQuestions)

          this.mathQuestions[i]=x
          this.totalQuestions[i]=x
          if(i==0){
            // console.log("here")
            this.question=x
            // console.log(this.chemQuestions)
          }
        })
      }
      }
    }
    if(this.questionStuDB.testType=="single"){
      for(let i =0; i<(this.totalQuestionsNumber) ; i++){
        console.log("chem")
        let ref = this.storage.ref('chem/chem('+(i+1)+').jpg');
        this.profileUrl = ref.getDownloadURL();
        this.profileUrl.subscribe(x => {
          // console.log(this.chemQuestions)
          this.chemQuestions[i]=x
          this.totalQuestions[i]=x
          if(i==0){
            // console.log("here")
            this.question=x
            // console.log(this.chemQuestions)
          }
        })
      }
    }
    // console.log("math=  "+this.mathQuestions)
    this.questionNumber=1;


  }
  btn(){
    // console.log(this.checkedAnswer.value)
    // console.log(z)
    console.log(this.question)
    console.log(this.chemQuestions)


  }

  optionSelected(option){
    // console.log(option);
    // this.checkedAnswer[option] = !this.checkedAnswer.option
    this.questionOption=option
    if(option=='a') {
      this.checkedAnswer.a=true;
      this.checkedAnswer.b =false;
      this.checkedAnswer.c=false;
      this.checkedAnswer.d =false;
     }
    if(option=='b') {
      this.checkedAnswer.b=true;
      this.checkedAnswer.a =false;
      this.checkedAnswer.c =false;
      this.checkedAnswer.d =false;
    }
    if(option=='c') {
      this.checkedAnswer.c=true;
      this.checkedAnswer.b =false;
      this.checkedAnswer.a=false;
      this.checkedAnswer.d =false;
     }
    if(option=='d') {
      this.checkedAnswer.d=true;
      this.checkedAnswer.a =false;
      this.checkedAnswer.c =false;
      this.checkedAnswer.b =false;
    }

    // console.log(this.checkedAnswer)
  }
  clearAlloption(x){
    if(x=="clear"){
      this.checkedAnswer.d=false;
      this.checkedAnswer.a =false;
      this.checkedAnswer.c =false;
      this.checkedAnswer.b =false;
      this.questionOption=""
      console.log("clear")
    }
    if(x=="next"){
      this.checkedAnswer.d=false;
      this.checkedAnswer.a =false;
      this.checkedAnswer.c =false;
      this.checkedAnswer.b =false;
    }

  }
  storeLocal(){
    localStorage.setItem('studentOptions',JSON.stringify(this.totalStudentOptions))
    localStorage.setItem('studentOptionsReview',JSON.stringify(this.markAsReview))
  }
  nextQuestion(nextQ , nextQuestionNumber){
    this.totalStudentOptions[this.questionNumber-1]=""
    if(this.questionOption!=null){
      this.totalStudentOptions[this.questionNumber-1]=this.questionOption

    }
    if(nextQ==1){
      this.markAsReview[this.questionNumber-1]="red"
    }
    if(nextQ==1 && this.questionOption!=null){
      if(this.questionOption!=""){
        console.log(  this.markAsReview)
        this.markAsReview[this.questionNumber-1]="green"
      }
    }

    if(nextQ!="save"){
      this.question=this.totalQuestions[this.questionNumber+1-1]
      this.questionNumber=nextQuestionNumber;

    }

    this.questionOption=null
    this.commonFunction();
    if(nextQ=='save'){
      this.imgCheck()
      this.markAsReview[this.questionNumber-1]="green"

    }
    console.log( this.markAsReview)
    console.log( this.totalStudentOptions)
    console.log(this.questionOption)
    this.storeLocal()
  }
  checkQuestionNumber(){
    if(this.totalQuestionsNumber==this.questionNumber){
      this.saveBtn=true
    }
    if(this.totalQuestionsNumber>this.questionNumber){
      this.saveBtn=false
    }
  }
  jumpToQuestion(questionNumberPar){
    let prevQuestionNumber=  this.questionNumber
    this.question=this.totalQuestions[questionNumberPar]
    this.questionNumber=questionNumberPar+1;
    this.commonFunction();
    if(this.markAsReview[prevQuestionNumber-1]!="green"){
      this.markAsReview[prevQuestionNumber-1]="red"

    }

  }

  markAsreview(par , mark){
    // this.chemQuestions[this.questionNumber-1].style="background-"
    if(par=='mark'){
      this.markAsReview[this.questionNumber-1]="purple"
    }
    if(par=='unmark'){
      this.markAsReview[this.questionNumber-1]=""
    }
    if(par=='mark' && this.questionOption!=null){
      this.markAsReview[this.questionNumber-1]="yellow"
    }
    if(mark!=2){
      this.nextQuestion(2,this.questionNumber+1);
    }
    this.checkReviewBtn();
  }

  checkReviewBtn(){
    if(this.markAsReview[this.questionNumber-1]!=""){
      console.log(this.markAsReview[this.questionNumber-1])
      if(this.markAsReview[this.questionNumber-1]!="red"){
        if(this.markAsReview[this.questionNumber-1]!="green"){

          this.reviewBtnText=true
          console.log("here")
        }
      }
    }
    if(this.markAsReview[this.questionNumber-1]=="" || this.markAsReview[this.questionNumber-1]==undefined ){
      this.reviewBtnText=false
    }
  }
  studentOptionRestore(){
    if(this.totalStudentOptions[this.questionNumber -1]!=""){
      this.questionOption=this.totalStudentOptions[this.questionNumber -1]
      if(this.questionOption=='a') {
        this.checkedAnswer.a=true;
        this.checkedAnswer.b =false;
        this.checkedAnswer.c=false;
        this.checkedAnswer.d =false;
       }
      if(this.questionOption=='b') {
        this.checkedAnswer.b=true;
        this.checkedAnswer.a =false;
        this.checkedAnswer.c =false;
        this.checkedAnswer.d =false;
      }
      if(this.questionOption=='c') {
        this.checkedAnswer.c=true;
        this.checkedAnswer.b =false;
        this.checkedAnswer.a=false;
        this.checkedAnswer.d =false;
       }
      if(this.questionOption=='d') {
        this.checkedAnswer.d=true;
        this.checkedAnswer.a =false;
        this.checkedAnswer.c =false;
        this.checkedAnswer.b =false;
      }

    }
  }
  imgCheck(){
    this.resumeTimer()
    if(this.timerInt==false){
      this.counter.begin();
      this.timerInt=true;
    }
    this.questionImgLoad=false;
    // console.log(this.questionImgLoad);
  }


  commonFunction(){
    this.questionImgLoad=true
    this.pauseTimer()
    this.clearAlloption("next")
    this.checkQuestionNumber();
    this.checkReviewBtn();
    this.studentOptionRestore();
  }
  submit(){
    this.totalStudentOptions[this.questionNumber-1]=""
    if(this.questionOption!=null){
      this.totalStudentOptions[this.questionNumber-1]=this.questionOption

    }
    this.question=this.totalQuestions[this.questionNumber+1-1]
    // console.log(this.totalStudentOptions)
    this.logout()
    this.questionStuDB.studentOptions=this.totalStudentOptions;
    this.questionStuDB.questionCorrectOptions=this.questionCorrectAnswere;

    this.router.navigate(['score'])

  }
  logout(){
    this.afAuth.auth.signOut();
    localStorage.removeItem('studentOptions')
    localStorage.removeItem('studentOptionsReview')
    localStorage.setItem('isLoggedIn','false')
    localStorage.removeItem('email')
  }
  check(){
      // this.counter.restart();
      this.counter.stop();
      // this.counter.resume();
      // this.counter.pause();
      // this.counter.begin();


  }
  pauseTimer(){
    this.counter.pause();
  }
  resumeTimer(){
    this.counter.resume();
  }
  startTimer(){
    this.counter.begin();

  }
  runTest(type){
    if(type=="test"){
      this.totalQuestionsNumber=12;
      this.questionCorrectAnswere=["a","b","c","a","b","c","a","b","c","a","b","c",]
      this.totalStudentOptions=[]

    }
    if(type=="run"){
      this.totalQuestionsNumber=this.questionStuDB.totalNumberOfQuestion;
      this.questionCorrectAnswere=this.questionStuDB.questionCorrectOptions
      this.totalStudentOptions=[]

    }
    if(type=="single"){
      this.totalQuestionsNumber=15;
      this.questionCorrectAnswere=["a","c","a","b","a","b","a","a","c","b","d","d","c","c","a"]
      this.chemQuestionsNumber=15
      this.mathQuestionsNumber=0;
      this.phyQuestionsNumber=0;
      this.chemQuestionsStartingNumber=1;
      this.mathQuestionsStartingNumber=0;
      this.phyQuestionsStartingNumber=0;
      this.totalStudentOptions=[]
    }
  }



}
