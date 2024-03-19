import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-birthday-wishes',
  templateUrl: './birthday-wishes.component.html',
  styleUrls: ['./birthday-wishes.component.css']
})
export class BirthdayWishesComponent implements OnInit {

  constructor(private router:Router,private service:MainService) { }

  ngOnInit(): void {
  }
  BdayCard = false;
  toggleClass($event:any) {
    
    // $event.stopPropagation();
    
    this.BdayCard = !this.BdayCard;
    this.service.dob=false;
    this.router.navigate(["/dashboard"]);

  }
}
