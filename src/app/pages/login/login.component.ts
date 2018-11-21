import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth , private router: Router) { }
  errorMsg:string;
  user:string;
  ngOnInit() {
  }
  loginWithEmail(email , password ,name){
    console.log(email,password)
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
         .then((user) => {
           console.log(user)
           localStorage.setItem('isLoggedIn','true')
           localStorage.setItem('email',this.afAuth.auth.currentUser.email )
           this.errorMsg='';
           location.reload();
           if(email=="t@gmail.com"){this.router.navigate(['remote'])}
           if(email!="t@gmail.com"){this.router.navigate(['wait'])}

         })
         .catch(error => this.errorMsg=error);

               this.afAuth.authState.subscribe(auth=>{
             if(auth){
                localStorage.setItem('uid',auth.uid )
                localStorage.setItem('user',name )

             }
     })
   }

}
