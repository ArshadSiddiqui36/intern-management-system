import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  }

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
      // console.log(result)
      this.data = result
      for (let i = 0; i < this.data.length - 1; i++) {
        this.add();
      }
      this.leaveForm.patchValue({
        leave:this.data
    })
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

 leaveForm=new FormGroup(
   {
     leave:new FormArray(
       [
         new FormGroup({
           start:new FormControl(""),
           end:new FormControl(""),
           reason:new FormControl(""),
           status:new FormControl(""),
           
         })
       ]
     )
   }
 )
 add(){
   const data=new FormGroup({
    start:new FormControl(""),
    end:new FormControl(""),
    reason:new FormControl(""),
    status:new FormControl(""),
    
  });
       (<FormArray>this.leaveForm.get("leave")).push(data);
 }
 addData(value:any){
  const data=new FormGroup({
    start:new FormControl(value.start),
    end:new FormControl(value.end),
    reason:new FormControl(value.reason),
    status:new FormControl(value.status),
    
  });
       (<FormArray>this.leaveForm.get("leave")).push(data);

 }
 getControl() {
   
  return (this.leaveForm.get('leave') as FormArray).controls;
}
 getValue(){
 
 
 }
  status() {
    // console.log(this.startdate)
    this.service.leaveDate({ date: this.startdate }).subscribe((result: any) => {
      if (result.body.data == 1) {
        this.startdate = null
        Swal.fire("Wrong Date","Leave aleardy Applied on given date!","error")
      }
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }



  oncheck() {
    // console.log("hhh")
    this.service.leaveDate({ date: this.enddate }).subscribe((result: any) => {
      if (result.body.data == 1) {
        this.enddate = null
        Swal.fire("Wrong Date","Leave aleardy Applied on given date!","error")
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
    // console.log(this.min);
  }

  onSubmit(value: any) {
    // console.log(value)
     if(value.startdate!=null && value.startdate!="" && value.enddate!="" && value.enddate!=null ){
    this.service.leaveApi(value).subscribe((result: any) => {
      Swal.fire('Success', "Leave applied successfully", "success")
      // console.log(result.body)
      this.addData(result.body)

    }, (error: any) => {
      alert("server is down Please try again later")
       Swal.fire("Error","Internal Server Error","error")
    })
  }
  else{
    if(value.startdate=="" || value.startdate==null )
    Swal.fire("Error","please provide startdate","error")
    else
    Swal.fire("Error","please provide enddate","error")
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
