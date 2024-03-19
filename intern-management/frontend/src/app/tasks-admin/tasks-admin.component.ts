import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-tasks-admin',
  templateUrl: './tasks-admin.component.html',
  styleUrls: ['./tasks-admin.component.css']
})
export class TasksAdminComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.Status.emit(true)
    this.service.userStatus.emit("1");
  }

}
