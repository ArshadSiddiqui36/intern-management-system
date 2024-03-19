import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // email='';

  emails: string = "";
  passwords: string = "";
  // data: any;
   key: boolean = false
  constructor(private service: MainService, private router: Router) { }
  ngOnInit(): void {
    // this.service.Status.emit(false)
    // throw new Error('Method not implemented.');
    if (sessionStorage.getItem("role")=="Admin") {
        //  window.history.back()
        // console.log("ggg")
        this.service.Status.emit(true)
        this.router.navigate(["/profile"])

     }
     else if(sessionStorage.getItem("role")=="Intern"){
      this.service.Status.emit(true)
      this.router.navigate(["/profile"])

     }
  }

  CheckUser(email:any){
    console.log(email.value)
    this.service.getExistApi({email:email.value}).subscribe((result: any) => {
      console.log(result.body)
     if (result.body.value== true) {
       console.log(result.body.value)
       //  this.status.emit(true)
        this.key=false
     }
     else{
       //  this.status.emit(false)
        this.key=true
        
     }
   }, (error: any) => {
     console.log(error)
   })
             // this.service.g
             // etExistApi({})
  }
  onSubmit(value: any) {
    console.log(value)
    this.service.loginApi(value).subscribe((result: any) => {
      localStorage.setItem("employee", "yes")
      console.log(result.body)
      this.service.Status.emit(true)
      if (result.body.value == 1) {
        this.service.userStatus.emit("1")
        sessionStorage.setItem("token", result.body.token)
        sessionStorage.setItem("role","Admin")
        this.router.navigate(["/profile"])
      }
      else {
        this.service.userStatus.emit("2")
        sessionStorage.setItem("token", result.body.token)
        sessionStorage.setItem("role","Intern")
        this.router.navigate(["/profile"])
      }
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

  google() {
    console.log("ffffffffffff")
  }
  forgotPassword() {
    this.router.navigate(["/forgotpassword"]);
    console.log(this.emails)
    if (this.emails != "") {
      console.log(this.emails)
      this.service.forgotEmailApi({ email: this.emails }).subscribe((result: any) => {

      })
      // this.service.getExistApi({ Email: this.email }).subscribe((result: any) => {
      //   console.log(result.body.value)
      //   if (result.body.value == false) {
      //     alert(" go and Please register first")

      //   }
      //   else {

      //     this.service.forgotEmailApi({
      //       data: { email: this.email }
      //     }
      //     ).subscribe({
      //       next: data => {

      //         localStorage.setItem("url", "forgot")
      //         localStorage.setItem("registerToken", data.body.token)
      //         this.router.navigate(['/confirm'])

      //         // this.router.navigate(['/confirm'])
      //         // }
      //       },
      //       error: err => {
      //         console.log(err)
      //       }
      //     })
      //   }
      // }, (error: any) => {
      //   alert("server is down Please try again later")
      // })
    }
    else {
      alert("Please Enter Email id for forgot password")
    }
  }



}
