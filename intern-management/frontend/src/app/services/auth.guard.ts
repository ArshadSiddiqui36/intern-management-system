import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: MainService, private router: Router) { }

  canActivate( _route: ActivatedRouteSnapshot) {

   if(!_route.data.roles){
    if (sessionStorage.getItem("token")) {
      return true;
    }
    else {
      return this.router.navigate(["/login"]);

    }
  }
    if (sessionStorage.getItem("token") && _route.data.roles==sessionStorage.getItem("role")) {
      return true;
    }
    else {
      return this.router.navigate(["/login"]);

    }
  }
  
}
