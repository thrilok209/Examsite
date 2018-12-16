import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';

import {Router} from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  errorMsg:string;
    userId:string;
    usersRef: AngularFireList<any>;
    constructor( public db:AngularFireDatabase ,public afAuth: AngularFireAuth , private router: Router) {
        this.usersRef = db.list('users')
      }
  ngOnInit() {
  }
  signWithEmail(email , password , passwordCon , name){
    if(passwordCon!=password) return this.errorMsg="Password Doesn't Match";
    if(passwordCon==password)  this.errorMsg="";
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user =>{
      // console.log(email, password)
      console.log(user)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.afAuth.auth.currentUser.email )

      this.afAuth.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid )
          this.usersRef.push({'name':name , 'email':email , 'password': password , 'uid':user.user.uid})

        }
        this.afAuth.auth.signOut()
        localStorage.setItem('isLoggedIn','false')
        localStorage.removeItem('email')
        localStorage.removeItem('uid' )
        this.router.navigate(['login'])
      })

    }).catch(error=>{
      console.error(error)
      this.errorMsg=error;

    })
  }
}
