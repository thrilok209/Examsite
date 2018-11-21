import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import {Router} from '@angular/router';

import { AddingQuestionService } from '../adding-question.service'




@Component({
  selector: 'app-add-questions-page',
  templateUrl: './add-questions-page.component.html',
  styleUrls: ['./add-questions-page.component.css']
})
export class AddQuestionsPageComponent implements OnInit {
  titlePart=false;
  questionAddingPart=true;
  totalNumberOfQuestionToAdd=0
  titleOfTest:string;
  numberOfChemQuestion=0
  numberOfphyQuestion=0
  numberOfmathQuestion=0
  phyArray=[]
  ChemArray=[]
  MathArray=[]

  chemQuestionUrls=[]
  phyQuestionUrls=[]
  mathQuestionUrls=[]
   chemUploadPercent: Observable<any>;
   phyUploadPercent: Observable<any>;

   mathUploadPercent: Observable<any>;

  // itemsRef: AngularFireList<any>;
  //  items: Observable<any[]>;
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  testsRef: AngularFireList<any>;
  tests: Observable<any>;
  usersRef: AngularFireList<any>;
  users: Observable<any>;
  StatusTextAdmin=""
  constructor(db: AngularFireDatabase , private storage: AngularFireStorage , private router:Router , private questionDB:AddingQuestionService ) {
    // this.itemsRef = db.list('tests');
    //     // Use snapshotChanges().map() to store the key
    //     this.items = this.itemsRef.snapshotChanges().pipe(
    //       map(changes =>
    //         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //       )
    //     );
    this.testsRef = db.list('TESTS')
    this.testsRef.snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
        this.StatusTextAdmin=action.payload.val().status
      });
    });
    this.itemRef = db.object('statusTest');
    this.item = this.itemRef.valueChanges();
  }
  ngOnInit() {
    // this.itemsRef.push({'title':"thrilok" , 'numberOfQuestion': 18 , 'correctOptions': 18 , 'testUsers': 18 , });
    // this.itemRef.set();
      // this.itemRef.set({ status: "start" });

  }
  testStatus(x){
    if(x==1){  this.itemRef.set({ status: "start" });}
    if(x==2){  this.itemRef.set({ status: "wait" });}
  }
  check(){
  this.testsRef.push({'title':"thrilok" , 'numberOfQuestion': {'totalQuestion':12,'chem':4 , 'phy':4 , 'math':4} , 'correctOptions': ["a","b","c","a","b","c","a","b","c","a","b","c"] , 'atCommand': ['1'] , 'status':'pending' , 'studentOptions':[]});
  }

  addTitle(title,quePhyNum,queChemNum,queMathNum){
    this.titleOfTest=title;
    this.totalNumberOfQuestionToAdd=parseInt(quePhyNum)+parseInt(queChemNum)+parseInt(queMathNum);
    this.numberOfphyQuestion=parseInt(quePhyNum)
    this.numberOfChemQuestion=parseInt(queChemNum)
    this.numberOfmathQuestion=parseInt(queMathNum)
    this.phyArray.length=quePhyNum
    this.ChemArray.length=queChemNum
    this.MathArray.length=queMathNum
    this.questionAddingPart=false;
    this.titlePart=true;
    console.log(this.phyArray)

  }
  uploadFile(event  , questionNum, subject) {
  const file = event.target.files[0];
  const filePath = this.titleOfTest+"/"+subject+"("+questionNum+")";
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);

  // observe percentage changes
  // if(subject=="chem"){
  //   this.chemUploadPercent[questionNum] = task.percentageChanges();
  //   console.log("chem percentage")
  // }
  // if(subject=="math"){
  //   this.mathUploadPercent[questionNum] = task.percentageChanges();
  //   console.log("math percentage")
  //
  // }
  //   if(subject=="phy"){
  //     this.phyUploadPercent[questionNum] = task.percentageChanges();
  //     console.log("phy percentage")
  //
  //   }
  // get notified when the download URL is available
  task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(x=>{
          if(subject=="chem"){
            this.chemQuestionUrls[questionNum-1]= x
            console.log(this.chemQuestionUrls[questionNum-1])
            }
          if(subject=="math"){this.mathQuestionUrls[questionNum-1]= x; }
          if(subject=="phy"){this.phyQuestionUrls[questionNum-1]= x; }
        })
      })
   )
  .subscribe()
  }
  addAnswers(){
    if(this.phyQuestionUrls.length==this.numberOfphyQuestion && this.mathQuestionUrls.length==this.numberOfmathQuestion && this.chemQuestionUrls.length==this.numberOfChemQuestion){
      this.questionDB.phyQuestionUrls=this.phyQuestionUrls
      this.questionDB.mathQuestionUrls=this.mathQuestionUrls
      this.questionDB.chemQuestionUrls=this.chemQuestionUrls
      this.questionDB.numberOfphyQuestion=this.numberOfphyQuestion
      this.questionDB.numberOfChemQuestion=this.numberOfChemQuestion
      this.questionDB.numberOfmathQuestion=this.numberOfmathQuestion


      this.questionDB.totalNumberOfQuestion=this.numberOfphyQuestion+this.numberOfChemQuestion+this.numberOfmathQuestion
      this.questionDB.titleOfTest=this.titleOfTest
      this.questionDB.totolQuestionUrls=this.phyQuestionUrls.concat(this.chemQuestionUrls,this.mathQuestionUrls)
      console.log("all que from component")
      console.log(this.questionDB.totolQuestionUrls)
      console.log(this.chemQuestionUrls)
      this.router.navigate(['addAns'])
    }else{
      window.alert("wait")
    }

  }

}
