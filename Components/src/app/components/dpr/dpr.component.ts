import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dpr',
  templateUrl: './dpr.component.html',
  styleUrls: ['./dpr.component.css']
})
export class DprComponent implements OnInit {

  constructor(private service: MainService) { }
  index: any

  ngOnInit(): void {
    this.service.Status.emit(true)
    this.service.userStatus.emit("2");
    this.service.getDpr().subscribe((result: any) => {
      // console.log(result)
      this.index = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }
  dprDate = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() + ", " + new Date().getHours() + ":" + new Date().getMinutes()
  changeDate(value:any){
    const d = new Date(value);
     console.log(value)
         return d.toUTCString().split("18:30")[0];
  }

  onSubmit(value: any) {
    console.log(value)
    this.service.dprApi(value).subscribe((result: any) => {
      Swal.fire("Dpr Added Sucessfully!")
      console.log(result.body)

    }, (error: any) => {
      alert("Something went wrong please try again")
    })
  }
  /****viw-dpr */
  changeTime(value: any) {
    // new Date("2021-12-06T10:06").getDate()
    console.log("fffffff")
    console.log(value)
    if (value != null)
      return new Date(value).getHours() + ":" + new Date(value).getMinutes()
    else
      return "not found"
  }

}
