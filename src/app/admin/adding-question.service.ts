import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddingQuestionService {
  titleOfTest;
  time:number;
  numberOfChemQuestion=0
  numberOfphyQuestion=0
  numberOfmathQuestion=0
  totalNumberOfQuestion=0
  array=[]
  chemQuestionUrls=[]
  phyQuestionUrls=[]
  mathQuestionUrls=[]
  phyCorrectOptions=[]
  ChemCorrectOptions=[]
  MathCorrectOptions=[]

  totolQuestionUrls=[]
  atCommandUsers=[]
  questionCorrectOptions=[]
  testsRef: AngularFireList<any>;
  tests: Observable<any>;
    testScoreRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase) {
    this.testsRef = db.list('TESTS')
    this.testsRef.snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
      });
    });

  }
  addTest(){
    this.testsRef.push({'title':this.titleOfTest ,
     'numberOfQuestion': {"total":this.totalNumberOfQuestion, "phy":this.numberOfphyQuestion , "chem":this.numberOfChemQuestion , "math":this.numberOfmathQuestion} ,
      'correctOptions':{"totalQue":this.questionCorrectOptions  , "phy":this.phyCorrectOptions , "chem":this.ChemCorrectOptions , "math":this.MathCorrectOptions} ,
      "studentOptions":[],
      //  'Atcommand': this.atCommandUsers ,
        Teststatus:"pending",
        startTest:"wait",
      time:this.time});

  }

}
