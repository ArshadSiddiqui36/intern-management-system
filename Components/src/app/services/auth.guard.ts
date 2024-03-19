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
    console.log(localStorage.getItem("token"));
     console.log(_route.data.roles)
  //  console.log( this.route.snapshot.data)
  //    this.route.snapshot.data.subscribe((result: { value: any; })=>{
  //      console.log(result.value)
  //    })
   if(!_route.data.roles){
    if (sessionStorage.getItem("token")) {
      console.log("authorized");
      return true;
    }
    else {
      console.log("unauthorized")
      return this.router.navigate(["/login"]);

    }
  }
    if (sessionStorage.getItem("token") && _route.data.roles==sessionStorage.getItem("role")) {
      console.log("authorized");
      return true;
    }
    else {
      console.log("unauthorized")
      return this.router.navigate(["/login"]);

    }
  }
  canActivatechild(){

  }
  adminActivate() {
    // console.log(localStorage.getItem("token"));

    if (sessionStorage.getItem("admintoken")) {
      console.log("authorized");
      return true;
    }
    else {
      console.log("unauthorized")
      return this.router.navigate(["/profile"]);

    }
  }
}
