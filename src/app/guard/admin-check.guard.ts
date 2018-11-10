import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminCheckGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth , private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('email')=="t@gmail.com"){
        return true;
      }
      window.alert("You don't have permission to view this page");
      this.afAuth.auth.signOut()
      this.router.navigate(['login'])
      return false;
  }
}
