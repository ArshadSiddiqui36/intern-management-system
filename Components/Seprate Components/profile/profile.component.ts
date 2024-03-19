import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  photo: any;

  constructor(private service:MainService,private route:ActivatedRoute) { }
  firstName:any;
  lastName:any;
  Designation:any;
  phone:any;
  address:any;
  name=""
  email:any
  ngOnInit(): void {
    // if(sessionStorage.getItem("role")!="Admin")
    // window.history.back()
    // this.route.par
    console.log("ggfdd")
    console.log(this.route.data)
    this.service.Status.emit(true)
   if (sessionStorage.getItem("role")=="Admin") {
    this.service.userStatus.emit("1");
   } else if(sessionStorage.getItem("role")=="Intern"){
     
     this.service.userStatus.emit("2");
   }
    this.service.getEmployee().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
      // console.log(result)
      if(result.name!=undefined)
      // console.log(result.name)
      this .name=result.name.split(" ")
      // console.log(this.name)
      this.firstName=this.name[0]
      this.lastName=this.name[1]
      this.Designation=result.designation
      this.phone=result.phone;
      this.address=result.address
      this.email=result.email
      this.photo=result.photo
    // const c=new Uint8Array(result.photo.data);
    // var blob = new Blob( [ c], { type: "image/jpeg" } );
    // const base64String = btoa(String.fromCharCode(...new Uint8Array(result.photo.data)));
    //  btoa(String.fromCharCode.apply(null, new Uint8Array(c)))
    // const STRING_CHAR = String.fromCharCode.apply(null, c);
    // console.log(base64String);
    //  this.photo="data:image/png;base64,"+base64String
    //  new Uint8Array
     
   }, (error: any) => {
     alert("server is down Please try again later")
   })
    }


}
