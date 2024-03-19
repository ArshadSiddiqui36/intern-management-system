import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MainService,private router:Router) { }

  ngOnInit(): void {
    this.service.userStatus.emit("2");
    this.service.Status.emit(true);
    this.service.getEmployee().subscribe(
      (result: any) => {
        console.log(result.dob)
        if(new Date(result.dob).getDate()==new Date(Date.now()).getDate() && new Date(result.dob).getMonth()==new Date(Date.now()).getMonth() && this.service.dob){
          console.log("hello")
          this.router.navigate(["/birthday"])
        }
      })
  }

}
