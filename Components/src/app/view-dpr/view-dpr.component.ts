import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-view-dpr',
  templateUrl: './view-dpr.component.html',
  styleUrls: ['./view-dpr.component.css']
})
export class ViewDprComponent implements OnInit {

  constructor(private service:MainService) { }
  index:any
  ngOnInit(): void {
    this.service.userStatus.emit("1");
    this.service.Status.emit(true);
    this.service.getDpr().subscribe((result: any) => {
      // Swal.fire("leave Applied  Sucessfully!")
      console.log(result)
      this.index = result


    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }
  changeTime(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    console.log("fffffff")
    console.log(value)
    if (value != null)
      return new Date(value).getHours() + ":" + new Date(value).getMinutes()
    else
      return "not found"
  }
  changeDate(value:any){
    const d = new Date(value);
     console.log(value)
         return d.toUTCString().split("18:30")[0];
  }
}
