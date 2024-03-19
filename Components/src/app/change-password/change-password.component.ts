import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.Status.emit(true)
    if (sessionStorage.getItem("role")=="Admin") {
      this.service.userStatus.emit("1");
     } else if(sessionStorage.getItem("role")=="Intern") {
       
       this.service.userStatus.emit("2");
     }
  }

  onSubmit(value:any){
    console.log(value)
    this.service.changepassword(value).subscribe((result: any) => {

      console.log(result.body)
      Swal.fire("password changed Sucessfully!")
     
   }, (error: any) => {
     alert("server is down Please try again later")
   })
 
  
  }
}
