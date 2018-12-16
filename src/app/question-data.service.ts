import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList,AngularFireObject  } from '@angular/fire/database';

import {  Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {
  studentOptions=[]
  questionUrl;
  questionCorrectOptions=[];
  userOptions;
  allUsersOption=[]
  testUserAtCommand=[]
  totalNumberOfQuestion=0;
  dbStatus=false;
  keyOfTheTest="";
  testsRef: AngularFireList<any>;
  tests: Observable<any>;
  usersRef: AngularFireList<any>;
  users: Observable<any>;
  titleOfTest=''
  atCommandUserBoolean
  testType:string

  chemQuestionsNumber:number=0;
  mathQuestionsNumber:number=0;
  phyQuestionsNumber:number=0;
  profileUrl: Observable<string | null>;
  chemStudentOptions=[]
  chemQuestions=[];
  phyStudentOptions=[]
  phyQuestions=[];
  mathStudentOptions=[]
  mathQuestions=[];
  totalQuestions=[];
  totalStudentOptions=[];
  setInterval
  // itemRef: AngularFireObject<any>;
  // item: Observable<any>;
  constructor(private router: Router,private storage: AngularFireStorage , db: AngularFireDatabase) {
    this.testsRef = db.list('TESTS')
    // this.testsRef.snapshotChanges()
    // .subscribe(actions => {
    //   actions.forEach(action => {
    //     console.log(action.type);
    //     console.log(action.key);
    //     console.log(action.payload.val());
    //   });
    // });
   }
   getTest(type , key){
     this.testType=type;
      if(type=="run"){
         this.testsRef.snapshotChanges()
         .subscribe(actions => {
           actions.forEach(action => {
          //  console.log(action.type);
          //  console.log(action.key);
             console.log(action.payload.val());
             if(action.key==key){
               console.log("found")
               this.keyOfTheTest=action.key
               this.questionCorrectOptions=action.payload.val().correctOptions.totalQue
               this.totalNumberOfQuestion=action.payload.val().numberOfQuestion.total
               this.allUsersOption=action.payload.val().studentOptions
               this.testUserAtCommand=action.payload.val().atCommand
               this.titleOfTest=action.payload.val().title
               this.mathQuestionsNumber=action.payload.val().numberOfQuestion.math
               this.chemQuestionsNumber=action.payload.val().numberOfQuestion.chem
               this.phyQuestionsNumber=action.payload.val().numberOfQuestion.phy

               console.log("total question from db   "+ this.titleOfTest)

                 this.setInterval= setInterval(() => { this.checkDBStatus() }, 1000);
               this.getQuestionUrl()

           }
         });
       });
     }
      if(type!="run"){
        console.log(type)
        this.dbStatus=true
      }

   }
   submitAfterTest(user, options){
     if(this.allUsersOption.length==0){
       this.allUsersOption.push({userName:user , userOptions:options})
        this.testsRef.update(this.keyOfTheTest, { studentOptions: this.allUsersOption });
     }
     this.allUsersOption.push({userName:user , userOptions:options})
      this.testsRef.update(this.keyOfTheTest, { studentOptions: this.allUsersOption });
   }
   getQuestionUrl(){
     for(let i=0;i<this.phyQuestionsNumber;i++){
       console.log("phy")
        let ref = this.storage.ref(this.titleOfTest+'/phy('+(i+1)+')');
        this.profileUrl = ref.getDownloadURL();
        this.profileUrl.subscribe(x => {
          this.phyQuestions[i]=x
          this.totalQuestions[i]=x
        })
      }
      for(let i=0;i<this.chemQuestionsNumber;i++){
        console.log("chem")
         let ref = this.storage.ref(this.titleOfTest+'/chem('+(i+1)+')');
         this.profileUrl = ref.getDownloadURL();
         this.profileUrl.subscribe(x => {
           this.chemQuestions[i]=x
           this.totalQuestions[i+this.phyQuestionsNumber]=x
         })
       }
       for(let i=0;i<this.mathQuestionsNumber;i++){
         console.log("math")
          let ref = this.storage.ref(this.titleOfTest+'/math('+(i+1)+')');
          this.profileUrl = ref.getDownloadURL();
          this.profileUrl.subscribe(x => {
            this.mathQuestions[i]=x
            this.totalQuestions[i+this.phyQuestionsNumber+this.chemQuestionsNumber]=x
          })
        }
        console.log(this.totalQuestions.length)

   }
   checkDBStatus(){
     if(this.totalQuestions.length==this.totalNumberOfQuestion){

       this.dbStatus=true
       clearInterval(this.setInterval)
     }

   }
   studentOptionsCheck(Testkey,userKey){
     this.testsRef.snapshotChanges().subscribe(tests=>{
       tests.forEach(test=>{
         if(Testkey==test.key){
           test.payload.val().studentOptions.forEach(user=>{
             if(userKey==user.studentDBkey){
               console.log(user)
               this.studentOptions=user.opt
               this.questionCorrectOptions=test.payload.val().correctOptions.totalQue
               this.titleOfTest=test.payload.val().title
               console.log(this.questionCorrectOptions)

               this.router.navigate(['/viewAnswers'])

             }
           })
         }
       })
     })
     this.getQuestionUrl()

   }
}
