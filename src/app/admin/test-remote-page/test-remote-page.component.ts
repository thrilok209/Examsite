import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';
import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-test-remote-page',
  templateUrl: './test-remote-page.component.html',
  styleUrls: ['./test-remote-page.component.css']
})
export class TestRemotePageComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  testScoreRef: AngularFireList<any>;
  studentScore=[]
  btn='s'
  testLoadRef:AngularFireObject<any>;
  testLoaded;
  constructor(db: AngularFireDatabase) {
  this.itemRef = db.object('statusTest');
    this.item = this.itemRef.valueChanges();
    this.testScoreRef = db.list('testScore')
    this.testScoreRef.snapshotChanges()
    .subscribe(actions => {
      this.studentScore=[]
      actions.forEach(action => {
        // console.log(action.type);
        // console.log(action.key);
        // console.log(action.payload.val());
        // this.studentScore.push({"name":action.payload.val().name,'totalScore':action.payload.val().totalScore , "neg":action.payload.val().neg, "opt":action.payload.val().opt})
      });
    });
    this.testLoadRef= db.object('loadedTest')

      this.testLoadRef.snapshotChanges().subscribe(test =>{
        this.testLoaded=test.payload.val()
        this.studentScore=[]

        test.payload.val().studentOptions.forEach(options=>{
          console.log(options)
          this.studentScore.push(options)
        })
      })
  }
testStatus(x){
    if(x==1){  this.testLoadRef.update({ startTest: "start" }); this.testLoaded.startTest="start"}
    if(x==2){  this.testLoadRef.update({ startTest: "wait" }); this.testLoaded.startTest="wait"}
    if(x==3){  this.testLoadRef.update({ startTest: "end" }); this.testLoaded.startTest="end"}
  }
  ngOnInit() {
  }

}
