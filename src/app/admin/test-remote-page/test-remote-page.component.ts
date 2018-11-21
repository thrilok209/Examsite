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
  constructor(db: AngularFireDatabase) {
  this.itemRef = db.object('statusTest');
    this.item = this.itemRef.valueChanges();
    this.testScoreRef = db.list('testScore')
    this.testScoreRef.snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        // console.log(action.type);
        // console.log(action.key);
        console.log(action.payload.val());
        this.studentScore.push({"name":action.payload.val().name,'totalScore':action.payload.val().totalScore , "neg":action.payload.val().neg})
      });
    });

  }
testStatus(x){
    if(x==1){  this.itemRef.set({ status: "start" });}
    if(x==2){  this.itemRef.set({ status: "wait" });}
    if(x==3){  this.itemRef.set({ status: "end" });}
  }
  ngOnInit() {
  }

}
