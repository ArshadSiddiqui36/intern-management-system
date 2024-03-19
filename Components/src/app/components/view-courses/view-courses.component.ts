import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  
  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.Status.emit(true)
    if (sessionStorage.getItem("role")=="Admin") {
      this.service.userStatus.emit("1");
     } else if(sessionStorage.getItem("role")=="Intern"){
       
       this.service.userStatus.emit("2");
     }
     }

  

}
