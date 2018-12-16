import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-change-questions-page',
  templateUrl: './change-questions-page.component.html',
  styleUrls: ['./change-questions-page.component.css']
})
export class ChangeQuestionsPageComponent implements OnInit {
  uploadPercent: Observable<number>;
    downloadURL: Observable<string>;
  constructor(db: AngularFireDatabase , private storage: AngularFireStorage , private router:Router  ) {
}
uploadFile(event) {
  const file = event.target.files[0];
  const filePath = 'FullTest1/math(7)';
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);

  // observe percentage changes
  this.uploadPercent = task.percentageChanges();
  // get notified when the download URL is available
  task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL() )
   )
  .subscribe()
}
  ngOnInit() {
  }

}
