import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-tasks-intern',
  templateUrl: './tasks-intern.component.html',
  styleUrls: ['./tasks-intern.component.css']
})
export class TasksInternComponent implements OnInit {

  constructor(private service:MainService) { }

  data:any;

  ngOnInit(): void {
    this.service.Status.emit(true)
    this.service.userStatus.emit("2");
    
    this.service.getTask().subscribe((result: any) => {
      console.log(result)
      this.data = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })
    this.pastDateTime();
  }


   min: any = "";
   pastDateTime() {
    var tdate: any = new Date();
    var date: any = tdate.getDate();
    if (date < 10) {
      date = "0" + date;
    }
    var month: any = tdate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year: any = tdate.getFullYear();
    this.min = year + "-" + month + "-" + date;
    console.log(this.min);
  }

  onSubmit(value: any) {
     console.log(value);
    this.service.addTask(value).subscribe((result:any)=> {
      Swal.fire('<br><p>"Task Created!"</p>')
      console.log(result.body);
    }, (error: any) => {
      alert("Task not created")
    })
    
  }

  delTask() {
   this.service.delTask().subscribe((result:any)=> {
     Swal.fire('<br><p>"Task Completed!"</p>')
   }, (error: any) => {
     alert("Task not created")
   })
 }
}
