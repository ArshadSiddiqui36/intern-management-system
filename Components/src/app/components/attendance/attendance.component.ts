import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';
import { Chart, registerables } from "chart.js"


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private service: MainService) {

  }

  data: any;
  morning: any;
  evening: any;
  index: any;
  status: any = [];
  status1: any = [];
  ngOnInit(): void {
    this.service.Status.emit(true)
    this.service.userStatus.emit("2");
    this.pastDateTime();
    console.log(new Date("2021-12-06T10:06").getDate())
    this.service.getattendence().subscribe((result: any) => {
      console.log(result)
      this.index = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

  change(value: any) {

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





  /**attendence */

  morAtt() {
    console.log(this.morning)
    this.service.attendance({ morning: this.morning }).subscribe((result: any) => {

    })
  }

  min: any = "2021-12-06T10:06";

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
    var hours: any = tdate.getHours();
    var minutes: any = tdate.getMinutes();

    this.min = year + "-" + month + "-" + date + "T" + hours + ":" + minutes;
    console.log(this.min);
  }
  onSubmit(value: any) {

    this.service.attendance(value).subscribe((result: any) => {
      Swal.fire('<br><p>"Attendance Marked!"</p>')
      console.log(result);
    })
    console.log(value)
  }



























}
