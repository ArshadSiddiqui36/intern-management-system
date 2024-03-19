import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

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
  }


  change(value: any) {
  
    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }
  
    
  }


