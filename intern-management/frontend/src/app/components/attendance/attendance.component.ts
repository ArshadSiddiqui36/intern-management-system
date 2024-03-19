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
  hh: any;

  constructor(private service: MainService) {

  }
h(){
  // console.log("nnn")
  this.service.getEmployeeAttendance().subscribe((result: any) => {
    // console.log(result)
    this.index = result
  }, (error: any) => {
    alert("server is down Please try again later")
  })
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
    // console.log(new Date("2021-12-06T10:06").getDate())
    
  }

  change(value: any) {

    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }
  changeTime(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    // console.log("fffffff")
    // console.log(value)
    
    if (value != null){
      const hours=new Date(value).getHours()
      const minute=new Date(value).getMinutes()
      return (hours<10? "0"+hours : hours)  + ":" + (minute<10?"0"+minute :minute)
    }else
      return "--"
  }
  totalHours(value1: any, value2: any) {
    if (value2 != null)
      return new Date(value2).getHours() - new Date(value1).getHours()
    else
      return "--"
  }





  /**attendence */

  morAtt() {
    // console.log(this.morning)
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
    // console.log(this.min);
  }
  onMorning(){
     
    this.service.getMorning().subscribe((result: any) => {
      
      Swal.fire("Error","Moring Attendance Already Marked!","error")
      // console.log(result);
      // <HTMLInputElement>document.getElementById("first")
      var element = <HTMLInputElement> document.getElementById("first");
// element.checked = false;
// element.value=""
   this.morning=""
      // document.getElementById("first").checked = true;
    })
  } 
  onEvening(){
    this.service.getEvening().subscribe((result: any) => {
      console.log(result.value)
     if(result.value==1){
      Swal.fire("Error","Evening Attendance Already Marked!","error")
      // console.log(result);}
     }
      else {
        Swal.fire("Error","Please mark Morning Attendance","error")
     
      }
      // <HTMLInputElement>document.getElementById("first")
      var element = <HTMLInputElement> document.getElementById("first");
// element.checked = false;
 this.evening=''
      // document.getElementById("first").checked = true;
    })
  }
     
  
  
  onSubmit(value: any) {
    // if (value.group1=="value1") {
    //   this.service.getMorning(value).subscribe((result: any) => {
    //     Swal.fire("Success","Attendance Marked!","success")
    //     console.log(result);
    //   })
    // } else {
    //   this.service.getEvening(value).subscribe((result: any) => {
    //     Swal.fire("Success","Attendance Marked!","success")
    //     console.log(result);
    //   })
    // }
    
    this.service.attendance(value).subscribe((result: any) => {
     
      Swal.fire("Success","Attendance Marked!","success")
      // console.log(result);
    },(error:any)=>{
      Swal.fire("Error","Please Select morning and evening for Atendance!","error")
     
    })
    console.log(value)
  }



























}
