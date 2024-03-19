import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private service:MainService) { }
  
  Designation:any;
  phone:any;
  address:any;
  name=""
  email:any
  data:any;
  ngOnInit(): void {
    this.service.userStatus.emit("1");
    this.service.Status.emit(true)
    this.service.getAllEmployee().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
     this.data=result
     
   }, (error: any) => {
     alert("server is down Please try again later")
   })
    }
  }


