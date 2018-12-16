import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoadTestService {
  testLoadRef:AngularFireObject<any>;
  testLoaded;

  constructor(db: AngularFireDatabase  ) {
    this.testLoadRef= db.object('loadedTest')

      this.testLoadRef.snapshotChanges().subscribe(test =>{
        this.testLoaded=test.payload.val()
      })
  }
  testToLoad(test){
      this.testLoadRef.set(test)
  }
  testRemoveLoad(){
      this.testLoadRef.remove()
  }
  getLoadedTest(){
    this.testLoadRef.snapshotChanges().subscribe(test =>{
      return this.testLoaded=test.payload.val()
    })
  }
}
