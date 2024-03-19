import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import {Chart, registerables} from "chart.js"
// import 'chart.js/src/chart.js';


@Component({
  selector: 'app-view-attendence',
  templateUrl: './view-attendence.component.html',
  styleUrls: ['./view-attendence.component.css']
})
export class ViewAttendenceComponent implements OnInit {

  constructor(private service: MainService) {
    Chart.register(...registerables);
   }
  chart:any;
  index: any;
  status:any=[];
  status1:any=[];
  ngOnInit(): void {
    this.service.userStatus.emit("1");
    this.service.Status.emit(true);
    this.service.getattendence().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
      console.log(result)
      this.index = result

      for(let i =0;i<4;i++) {
        this.status[i]=new Date(new Date(this.index[i].morning ).getFullYear() +  "-" +new Date(this.index[i].morning ).getMonth()+"-"+ new Date(this.index[i].morning ).getDay())
        this.status1[i]=this.index[i].name

      }
      //console.log(this.status)


    }, (error: any) => {
      alert("server is down Please try again later")
    })


  }
  change(value: any) {
    // new Date("2021-12-06T10:06").getDate()

    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }
  changeTime(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    console.log("fffffff")
    console.log(value)
    if (value != null)
      return new Date(value).getHours() + ":" + new Date(value).getMinutes()
    else
      return "--"
  }
  totalHours(value1: any, value2: any) {
    if (value2 != null)
      return new Date(value1).getHours() + new Date(value2).getHours()
    else
      return "--"
  }
}
