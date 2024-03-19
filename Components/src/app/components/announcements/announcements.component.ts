import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private service:MainService) { }

  data:any;

  ngOnInit(): void {
    this.pastDateTime();
    this.service.Status.emit(true)
    this.service.userStatus.emit("1");

    this.service.getAnn().subscribe((result: any) => {
      console.log(result)
      this.data = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })
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
  change(value: any) {
  
    return new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
  }
  onSubmit(value: any) {
     console.log(value);
    this.service.addAnn(value).subscribe((result:any)=> {
      Swal.fire('<br><p>"Announcement Created!"</p>')
      console.log(result.body);
    }, (error: any) => {
      alert("Announcement not created")
    })
    
  }
}
