import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';

import {Router} from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersRef: AngularFireList<any>;
  constructor( public db:AngularFireDatabase ,public afAuth: AngularFireAuth , private router: Router) {
      this.usersRef = db.list('users')
    }
    signUp(email , password){
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user =>{
        // console.log(email, password)
        console.log(user)
        localStorage.setItem('isLoggedIn','true')
        localStorage.setItem('email',this.afAuth.auth.currentUser.email )

        this.afAuth.authState.subscribe(auth=>{
          if(auth){
            localStorage.setItem('uid',auth.uid )
            this.usersRef.push({'name':name , 'email':email , 'password': password})

          }
          // this.userDetails.getuser()

          // location.reload();
          //
          // this.router.navigate(['home'])

        })

        // this.router.navigate(['home'])
      }).catch(error=>{
        console.error(error)
        // this.errorMsg=error;

      })
    }
}
