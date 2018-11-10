import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList,AngularFireObject  } from '@angular/fire/database';

import {  Observable} from 'rxjs';


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
  // itemRef: AngularFireObject<any>;
  // item: Observable<any>;
  constructor(private storage: AngularFireStorage , db: AngularFireDatabase) {
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
   getTest(type){
     this.testType=type;
      if(type=="run"){
         this.testsRef.snapshotChanges()
         .subscribe(actions => {
           actions.forEach(action => {
          //  console.log(action.type);
          //  console.log(action.key);
             console.log(action.payload.val());
             if(action.payload.val().status=="pending"){
               console.log("found")
               this.keyOfTheTest=action.key
               this.questionCorrectOptions=action.payload.val().correctOptions
               this.totalNumberOfQuestion=action.payload.val().numberOfQuestion.total
               this.allUsersOption=action.payload.val().studentOptions
               this.testUserAtCommand=action.payload.val().atCommand
               this.titleOfTest=action.payload.val().title
               console.log("total question from db   "+ this.titleOfTest)
               this.dbStatus=true

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
}
