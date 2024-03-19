import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  photo: any;
  files: any;
  dob: any;
  month: any;
  day: any;

  constructor(private service: MainService) { }
  firstName:any;
  lastName:any;
  Designation:any;
  phone:any;
  address:any;
  name=""
  email:any
  
  ngOnInit(): void {
    this.service.Status.emit(true)
    if (sessionStorage.getItem("role")=="Admin") {
      this.service.userStatus.emit("1");
     } else {
       
       this.service.userStatus.emit("2");
     }
    
    this.service.getEmployee().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
      console.log(result)
      if(result.name!=undefined)
      this.name=result.name.split(" ")
      // console.log(this.name)
      this.firstName=this.name[0]
       this.lastName=this.name[1]
      this.Designation=result.designation
      this.phone=result.phone;
      this.address=result.address
      this.email=result.email
      this.imageURL=result.photo
      this.month=new Date(result.dob).getMonth()+1
      this.day=new Date(result.dob).getDate()
      this.month= this.month < 10 ? '0' + this.month : '' + this.month;
      this.day= this.day < 10 ? '0' + this.day : '' + this.day;
      this.dob= new Date(result.dob).getFullYear()+"-"+this.month+"-"+this.day
      
   }, (error: any) => {
     alert("server is down Please try again later")
   })
    }

  imageURL = "../../../assets/avatar.png";
  // imageURL: any;
  reader:any;
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();
      console.log(event.target.files)
      console.log(this.file)
      this.files=event.target.files;
      this.reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log("ssssssssssss")
      console.log(this.reader)
      this.reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.imageURL = event.target.result;
      }
    }
  }
  file:any;
  onSubmit(value: any) {
    
    // console.log(value.photo)
    // const m=this.imageURL.replace('data:image/png;base64,','');
    console.log(this.file)
    this.service.profileUpdate({value,reader:this.imageURL,photo:value.photo}).subscribe((result: any) => {
      
      Swal.fire('Success', "Profile Updated Successfully", "success")
      console.log(result)



    }, (error: any) => {
      Swal.fire("Error","Internal Server Error","error")
    })
  }


}
