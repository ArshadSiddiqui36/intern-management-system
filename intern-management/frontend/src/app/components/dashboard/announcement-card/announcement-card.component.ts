import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent implements OnInit {

  constructor(private service:MainService) { }

  data:any;
  ngOnInit(): void {
    
    this.service.getAnn().subscribe((result: any) => {
      console.log(result)
      this.data = result
    }, (error: any) => {
      alert("server is down Please try again later")
    })

  }
  changeDate(value: any) {
    
    if (value != null)
      return new Date(value).getHours() + ":" + new Date(value).getMinutes()+" | "+new Date(value).getDate() + "-" + new Date(value).getMonth() + "-" + new Date(value).getFullYear()
 
    else
      return "--"
  }
  
}
