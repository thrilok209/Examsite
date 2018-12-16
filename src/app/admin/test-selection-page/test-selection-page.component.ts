import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-test-selection-page',
  templateUrl: './test-selection-page.component.html',
  styleUrls: ['./test-selection-page.component.css']
})
export class TestSelectionPageComponent implements OnInit {
  testsRef:AngularFireList<any>;
  testLoadRef:AngularFireObject<any>;
  totalTests=[]
  testLoaded;
  constructor(db: AngularFireDatabase ,  private router:Router ) {
    this.testsRef= db.list('TESTS')
    this.testLoadRef= db.object('loadedTest')

    this.testsRef.snapshotChanges().subscribe(tests => {
      this.totalTests=[]
      tests.forEach(test =>{
        let x = test.payload.val()
        x.key=test.key
        this.totalTests.push(x)
        console.log(this.totalTests)
      })
    })
    this.testLoadRef.snapshotChanges().subscribe(test =>{
      this.testLoaded=test.payload.val()
    })
   }

  ngOnInit() {
  }
  testToLoad(key){
    console.log(key)
    this.totalTests.forEach(test=>{
      if(test.key==key){
        this.testLoaded=test
        this.testLoadRef.set(test)
      }
    })
  }

}
