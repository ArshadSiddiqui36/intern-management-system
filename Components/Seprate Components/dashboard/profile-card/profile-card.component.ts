import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor(private service:MainService) { }
  firstName:any;
  lastName:any;
  Designation:any;
  phone:any;
  address:any;
  name=""
  email:any
  photo:any;
  ngOnInit(): void {
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
