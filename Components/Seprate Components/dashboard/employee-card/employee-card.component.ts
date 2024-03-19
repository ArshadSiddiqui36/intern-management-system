import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  Designation:any;
  phone:any;
  address:any;
  name=""
  email:any
  data:any;
  constructor(private service:MainService){}
  ngOnInit(): void {
    // this.service.userStatus.emit("1");
    // this.service.Status.emit(true)
    this.service.getAllEmployee().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
      console.log(result)
     this.data=result
     
   }, (error: any) => {
     alert("server is down Please try again later")
   })
    }
  getPhoto(value:any){
    if(value==null )
    return "../../../../assets/avatar.png";
    else{
        return value;
    }
  }
}
