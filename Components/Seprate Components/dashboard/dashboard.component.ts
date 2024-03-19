import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.userStatus.emit("2");
    this.service.Status.emit(true);
    
  }

}
