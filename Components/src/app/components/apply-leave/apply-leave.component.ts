import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';
// import {Chart} from 'chart.js';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private service: MainService) {
  console.log("hhhhffdfssssssssssss")}
  a: any = "";
  data: any;
  startdate: any;
  enddate: any;
  j = 1;
  ngOnInit(): void {

    this.pastDateTime();


    this.service.userStatus.emit("2");
    this.service.Status.emit(true)
    this.service.statusleave().subscribe((result: any) => {


      console.log(result)
      this.data = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }
  status() {
    console.log(this.startdate)
    this.service.leaveDate({ date: this.startdate }).subscribe((result: any) => {
      if (result.body.data == 1) {
        this.startdate = null
        Swal.fire("leave aleardy Applied on given date!")/////////////////
      }
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

  statusleave(){
    Swal.fire({
      title: "<i>Title</i>",
      html: ` <table class="table table-hover">
      <thead style="background-color:#ff5b64 ;">
        <tr >
          <th scope="col">S.no </th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Reason</th>
          <th scope="col"> Status</th>

        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of data">
          <th scope="row">1</th>
          <td>{{change(i.start)}}</td>
          <td>{{change(i.end)}}</td>
          <td>{{i.reason}}</td>
          <td>{{i.status}}</td>
        </tr>

      </tbody>
    </table>`,

      confirmButtonText: "OK",
    });
    console.log('hi')
  }


  oncheck() {
    console.log("hhh")
    this.service.leaveDate({ date: this.enddate }).subscribe((result: any) => {
      if (result.body.data == 1) {
        this.enddate = null
        Swal.fire("leave aleardy Applied on given date!")
      }
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

  min: any = "";
  change(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }

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
    console.log(value)
     if(value.startdate!=null && value.startdate!="" && value.enddate!="" && value.enddate!=null ){
    this.service.leaveApi(value).subscribe((result: any) => {
      Swal.fire('<br><p>"leave Applied  Sucessfully!"</p>')
      console.log(result.body)

    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }
  else{
    if(value.startdate=="" || value.startdate==null )
    Swal.fire("please provide startdate ")
    else
    Swal.fire("please provide endate")
  }
}

  // User Menu Toggle
  leaveStatus = false;
  toggleClass($event:any) {
    // $event.stopPropagation();
    this.leaveStatus = !this.leaveStatus;
  }

  // onClick() {
  //   this.leaveStatus = false;
  // }


}
