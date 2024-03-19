import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
// import { resourceLimits } from 'worker_threads';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-leave-theme',
  templateUrl: './leave-theme.component.html',
  styleUrls: ['./leave-theme.component.css']
})
export class LeaveThemeComponent implements OnInit {

  index: any;
  createForm = new FormGroup({
    Leave: new FormArray([
      new FormGroup(
        {
          name: new FormControl(""),
          reason: new FormControl(""),
          status: new FormControl(""),
          start: new FormControl(""),
          end: new FormControl("")
        }
      )
    ])
  })
  constructor(private service: MainService) { }
  ngOnInit(): void {

    this.service.Status.emit(true)
    this.service.userStatus.emit("1");
    this.service.adminLeaveApi().subscribe((result: any) => {
      console.log(result)
      this.index = result
      for (let i = 0; i < this.index.length - 1; i++) {
        this.addLeave();
      }
      this.createForm.patchValue({
        Leave: this.index
      })

    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }


  change(value: any) {

    if (value == null || value == undefined)
      return "--"
    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }
  changeHours(value1: any, value2: any) {

    return new Date(value2).getDate() - new Date(value1).getDate()
  }


  addLeave() {
    const leaveData = new FormGroup({
      name: new FormControl(""),
      start: new FormControl(""),
      end: new FormControl(""),
      reason: new FormControl(""),
      status: new FormControl("")
    });
    (<FormArray>this.createForm.get("Leave")).push(leaveData);

  }
  getControl() {
    return (this.createForm.get('Leave') as FormArray).controls;
  }

  approved(i: any) {
    console.log(i);
    this.service.getUpdateStatus({ status: "approved" }).subscribe((result: any) => {
      this.createForm.value.Leave[i].status = "approved";
    }, (error: any) => {
      Swal.fire("Sorry server internal problem occured try again!")
    })
  }

  rejected(i: any) {
    this.service.getUpdateStatus({ status: "rejected" }).subscribe((result: any) => {
      this.createForm.value.Leave[i].status = "rejected";
    }, (error: any) => {
      Swal.fire("Sorry server internal problem occured try again!")
    })

  }

}
