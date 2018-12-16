import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

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
  DBTestStatus
  name:string;
  today: number = Date.now();
  usersRef: AngularFireList<any>;
  testLoadRef:AngularFireObject<any>;
  testLoaded;
setInterval;
loadTest=true;


  constructor(private auth:AngularFireAuth,db: AngularFireDatabase ,  private router:Router , private queDb:QuestionDataService) {
    this.itemRef = db.object('statusTest');
    this.usersRef = db.list('users')
    this.usersRef.snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        // console.log(action.type);
        // console.log();
        console.log(action.payload.val());
        if(action.payload.val().uid==localStorage.getItem('uid')){
          this.name=action.payload.val().name
          localStorage.setItem('user',action.payload.val().name)
          localStorage.setItem('name',action.payload.val().name)
          // console.log(localStorage.getItem('name'))

          localStorage.setItem('userDBKey',action.key)

        }
      });
    });
    // this.queDb.getTest("single")
    this.testLoadRef= db.object('loadedTest')

    this.testLoadRef.snapshotChanges().subscribe(test =>{

      status =test.payload.val().startTest
      this.DBTestStatus=status
      this.StatusText=status
      if(test.payload.val().studentOptions!=undefined){
        test.payload.val().studentOptions.forEach(testStu=>{
          console.log(testStu.studentDBkey)
          if(testStu.studentDBkey==localStorage.getItem("userDBKey")){

              // this.router.navigate(['viewAnswers'])
              this.loadTest=false;

          }
        })

      }

    })
  this.setInterval= setInterval(() => { this.checkDB() }, 1000);
//     this.itemRef.snapshotChanges().subscribe(action => {
//       let status =action.payload.val()
//       if(this.queDb.dbStatus==false){
//         this.StatusText=status.status
//         this.itemRef.set({ status: "wait" });
//
//       }
//       if(this.queDb.dbStatus==true){
//         this.StatusText=status.status
//
//         if(status.status=="start" ){
//           localStorage.setItem('presentTestTitle',this.queDb.titleOfTest)
//           if(JSON.parse(localStorage.getItem("studentOptions"))==undefined){
//             localStorage.setItem('studentOptions',JSON.stringify([]))
//             localStorage.setItem('studentOptionsReview',JSON.stringify([]))
//             localStorage.setItem('studentUsedTime',JSON.stringify(45*60))
//             localStorage.setItem('storeOpt',"waiting")
//
//           }
//           console.log(JSON.parse(localStorage.getItem("studentOptions")))
//           this.router.navigate(['view'])
//         }
//       }
//
// });
    this.item = this.itemRef.valueChanges();
  }

  ngOnInit() {
    this.testLoadRef.snapshotChanges().subscribe(test =>{

      this.testLoaded=test.payload.val()
      this.queDb.getTest("run" , test.payload.val().key)
      localStorage.setItem('testKEY',test.payload.val().key)
      localStorage.setItem('titleOfTest',test.payload.val().title)

    })
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
  checkDB(){
    console.log("its")
    if(this.loadTest==true){
      if(this.queDb.dbStatus==false){
        this.StatusText=status
        // this.itemRef.set({ status: "wait" });
      }
      if(this.queDb.dbStatus==true){
        this.StatusText=status

        if(status=="start" ){
          // localStorage.setItem('presentTestTitle',this.queDb.titleOfTest)
          if(JSON.parse(localStorage.getItem("studentOptions"))==undefined){
            localStorage.setItem('studentOptions',JSON.stringify([]))
            localStorage.setItem('studentOptionsReview',JSON.stringify([]))
            localStorage.setItem('studentUsedTime',JSON.stringify(this.testLoaded.time*60))
            localStorage.setItem('storeOpt',"waiting")
          }
          console.log(JSON.parse(localStorage.getItem("studentOptions")))
          clearInterval(this.setInterval)
          this.router.navigate(['view'])
        }
      }
    }
    if(this.loadTest==false){
    clearInterval(this.setInterval)
  }
  }
logout(){
  this.auth.auth.signOut()
  localStorage.clear()
  this.router.navigate(['/login'])
}
show(){
  this.queDb.studentOptionsCheck( localStorage.getItem('testKEY') , localStorage.getItem('userDBKey'))

}

}
