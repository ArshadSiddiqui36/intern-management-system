import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  // host: {
  //   "(window:click)": "onClick()"
  // }
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
