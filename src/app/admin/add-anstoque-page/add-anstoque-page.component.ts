import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList,AngularFireObject  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import {  Observable} from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { AddingQuestionService } from '../adding-question.service'


@Component({
  selector: 'app-add-anstoque-page',
  templateUrl: './add-anstoque-page.component.html',
  styleUrls: ['./add-anstoque-page.component.css']
})
export class AddAnstoquePageComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  addingAnsPart=false
addingUsersPart=true
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
  chemAdminOptions=[]
  chemQuestions=[];
  phyAdminOptions=[]
  phyQuestions=[];
  mathAdminOptions=[]
  mathQuestions=[];
  totalQuestions=[];
  totalAdminOptions=[];

  totalQuestionsNumber=this.questionDB.totalNumberOfQuestion;
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
  questionCorrectAnswere=[]
  // userData = {
  //  questionCorrectAnsweres:[]
  //
  // }
  timerInt=false;
  usersDetails = []
  itemRef: AngularFireObject<any>;
item: Observable<any>;
  constructor(public afAuth: AngularFireAuth , private storage: AngularFireStorage , private san: DomSanitizer, db: AngularFireDatabase , private router: Router , private questionDB:AddingQuestionService) {

  }

  ngOnInit() {


      this.totalQuestions=this.questionDB.totolQuestionUrls;
      this.totalAdminOptions=this.questionDB.questionCorrectOptions;
      this.totalQuestionsNumber=this.questionDB.totalNumberOfQuestion
      // this.totalQuestions=
      // ["https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2Fphy(1)?alt=media&token=27f39ef6-b58e-4037-bdf5-b5edb8743e03",
      // // "https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2F()?alt=media&token=a271b3ae-d436-4107-9524-dbcecd32b83b",
      // "https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2Fmath(1)?alt=media&token=8d7da82b-0026-4be4-b126-55d261b11071"]
      this.chemQuestions=this.questionDB.chemQuestionUrls
      this.phyQuestions=this.questionDB.phyQuestionUrls
      this.mathQuestions=this.questionDB.mathQuestionUrls
      this.chemQuestionsStartingNumber=this.questionDB.numberOfphyQuestion+1;
      this.mathQuestionsStartingNumber=this.questionDB.numberOfphyQuestion+this.questionDB.numberOfChemQuestion+1;
      this.phyQuestionsStartingNumber=1;
      // this.chemQuestions=this.questionDB.chemQuestionUrls
      // this.phyQuestions=this.questionDB.phyQuestionUrls
      // this.mathQuestions=this.questionDB.mathQuestionUrls
      // this.chemQuestionsStartingNumber=0+1;
      // this.mathQuestionsStartingNumber=0+2+1;
      // this.phyQuestionsStartingNumber=1+0;
    console.log("total que "+this.totalQuestionsNumber)
    // for(let i =0; i<(this.totalQuestionsNumber) ; i++){
    //   if(i>=(this.phyQuestionsStartingNumber-1) && i<(this.chemQuestionsStartingNumber-1)){
    //     console.log("phy")
    //     let ref = this.storage.ref('phy/phy('+(i+1)+').png');
    //     this.profileUrl = ref.getDownloadURL();
    //     this.profileUrl.subscribe(x => {
    //       // console.log(this.chemQuestions)
    //       this.phyQuestions[i]=x
    //       this.totalQuestions[i]=x
    //       if(i==0){
    //         // console.log("here")
    //         this.question=x
    //         // console.log(this.chemQuestions)
    //       }
    //     })
    //   }
    //   if(i>=(this.chemQuestionsStartingNumber-1) && i<(this.mathQuestionsStartingNumber-1)){
    //     console.log("chem")
    //     let ref = this.storage.ref('chem/chem('+(i+2-this.chemQuestionsStartingNumber)+').png');
    //     this.profileUrl = ref.getDownloadURL();
    //     this.profileUrl.subscribe(x => {
    //
    //       this.totalQuestions[i]=x
    //       this.chemQuestions[i]=x
    //       if(i==0){
    //         // console.log("here")
    //         this.question=x
    //         console.log(this.chemQuestions)
    //       }
    //     })
    //   }
    //   if(i>=(this.mathQuestionsStartingNumber-1) && i<(this.totalQuestionsNumber)){
    //     console.log("math")
    //     let ref = this.storage.ref('math/math('+(i+2-this.mathQuestionsStartingNumber)+').png');
    //     this.profileUrl = ref.getDownloadURL();
    //     this.profileUrl.subscribe(x => {
    //       // console.log(this.chemQuestions)
    //
    //       this.mathQuestions[i]=x
    //       this.totalQuestions[i]=x
    //       if(i==0){
    //         // console.log("here")
    //         this.question=x
    //         // console.log(this.chemQuestions)
    //       }
    //     })
    //   }
    //
    // }
    console.log("totalQuestions=  "+this.totalQuestions)
    this.question=this.totalQuestions[0]
    this.questionNumber=1;
    this.adminOptionRestore()


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
  nextQuestion(nextQ , nextQuestionNumber){
    this.totalAdminOptions[this.questionNumber-1]=""
    if(this.questionOption!=null){
      this.totalAdminOptions[this.questionNumber-1]=this.questionOption

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
    console.log( this.totalAdminOptions)
    console.log(this.questionOption)
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
    if(this.questionNumber!=questionNumberPar+1){

      let prevQuestionNumber=  this.questionNumber
      this.question=this.totalQuestions[questionNumberPar]
      this.questionNumber=questionNumberPar+1;
      console.log(questionNumberPar)
      console.log(this.question)

      this.commonFunction();
      if(this.markAsReview[prevQuestionNumber-1]!="green"){
        this.markAsReview[prevQuestionNumber-1]="red"

      }
    }

  }

  // markAsreview(par , mark){
  //   // this.chemQuestions[this.questionNumber-1].style="background-"
  //   if(par=='mark'){
  //     this.markAsReview[this.questionNumber-1]="purple"
  //   }
  //   if(par=='unmark'){
  //     this.markAsReview[this.questionNumber-1]=""
  //   }
  //   if(par=='mark' && this.questionOption!=null){
  //     this.markAsReview[this.questionNumber-1]="yellow"
  //   }
  //   if(mark!=2){
  //     this.nextQuestion(2,this.questionNumber+1);
  //   }
  //   this.checkReviewBtn();
  // }

  // checkReviewBtn(){
  //   if(this.markAsReview[this.questionNumber-1]!=""){
  //     this.reviewBtnText=true
  //   }
  //   if(this.markAsReview[this.questionNumber-1]=="" || this.markAsReview[this.questionNumber-1]==undefined){
  //     this.reviewBtnText=false
  //   }
  // }
  adminOptionRestore(){
    if(this.totalAdminOptions[this.questionNumber -1]!=""){
      this.questionOption=this.totalAdminOptions[this.questionNumber -1]
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
    if(this.timerInt==false){
      this.timerInt=true;
    }
    this.questionImgLoad=false;
    // console.log(this.questionImgLoad);
  }


  commonFunction(){
    this.questionImgLoad=true
    this.clearAlloption('next')
    this.checkQuestionNumber();
    this.adminOptionRestore();

  }
  addUsers(){
    // this.totalAdminOptions=["a","b","c"]
    this.questionDB.questionCorrectOptions=this.totalAdminOptions
    this.cutOptions()
    this.questionDB.phyCorrectOptions=this.phyAdminOptions
    this.questionDB.ChemCorrectOptions=this.chemAdminOptions
    this.questionDB.MathCorrectOptions=this.mathAdminOptions




    this.addingAnsPart=true;
    this.addingUsersPart=false;
    this.router.navigate(['checkAdminOptions'])
  }
  cutOptions(){
    console.log(this.chemQuestionsStartingNumber)
    this.phyAdminOptions=this.totalAdminOptions.slice(0,this.chemQuestionsStartingNumber-1)
    this.chemAdminOptions=this.totalAdminOptions.slice(this.chemQuestionsStartingNumber-1,this.mathQuestionsStartingNumber-1)
    this.mathAdminOptions=this.totalAdminOptions.slice(this.mathQuestionsStartingNumber-1)
    console.log(this.phyAdminOptions)
    console.log(this.chemAdminOptions)
    console.log(this.mathAdminOptions)

  }

}
