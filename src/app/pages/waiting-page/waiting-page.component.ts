import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireList ,  AngularFireObject} from '@angular/fire/database';

import {  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {QuestionDataService} from '../../question-data.service';


@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.css']
})
export class WaitingPageComponent implements OnInit {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  StatusText=""
  constructor(db: AngularFireDatabase ,  private router:Router , private queDb:QuestionDataService) {
    this.itemRef = db.object('statusTest');
    this.queDb.getTest("single")
    this.itemRef.snapshotChanges().subscribe(action => {
      let status =action.payload.val()
      if(this.queDb.dbStatus==false){
        this.StatusText=status.status
        this.itemRef.set({ status: "wait" });

      }
      if(this.queDb.dbStatus==true){
        this.StatusText=status.status

        if(status.status=="start" ){
          localStorage.setItem('presentTestTitle',this.queDb.titleOfTest)
          if(JSON.parse(localStorage.getItem("studentOptions"))==undefined){
            localStorage.setItem('studentOptions',JSON.stringify([]))
            localStorage.setItem('studentOptionsReview',JSON.stringify([]))

          }
          console.log(JSON.parse(localStorage.getItem("studentOptions")))
          this.router.navigate(['view'])
        }
      }

});
    this.item = this.itemRef.valueChanges();
  }

  ngOnInit() {
    let atuser=this.queDb.testUserAtCommand
    let count=0;
    console.log(atuser)
    console.log(localStorage.getItem('email'))
    // for(let i=0; i<atuser.length;i++){
    //   if(atuser[i]!=localStorage.getItem('email')){
    //     count++
    //     console.log("here here")
    //   }
    // }
    // if(count!=atuser.length){
    //   this.router.navigate(['view'])
    // }
    // this.itemRef.set({ status: "wait" });

  }

}
