import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-wishes',
  templateUrl: './birthday-wishes.component.html',
  styleUrls: ['./birthday-wishes.component.css']
})
export class BirthdayWishesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  BdayCard = false;
  toggleClass($event:any) {
    // $event.stopPropagation();
    this.BdayCard = !this.BdayCard;
  }
}
