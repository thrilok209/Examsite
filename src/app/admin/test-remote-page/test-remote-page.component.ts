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
  constructor(db: AngularFireDatabase) {
  this.itemRef = db.object('statusTest');
    this.item = this.itemRef.valueChanges();
  }
testStatus(x){
    if(x==1){  this.itemRef.set({ status: "start" });}
    if(x==2){  this.itemRef.set({ status: "wait" });}
  }
  ngOnInit() {
  }

}
