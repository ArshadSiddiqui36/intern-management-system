import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:click)': 'onClick()',
  },
})
export class HeaderComponent implements OnInit {
  name: any;
  checkOne = '0';
  checkTwo = false;
  image = '../../../assets/avatar.png';
  constructor(private service: MainService, private router: Router) {}
  ngOnInit(): void {
   
    
    this.service.userStatus.subscribe((status: any) => {
      this.checkOne = status;
    });
    this.service.Status.subscribe((status: any) => {
      this.checkTwo = status;
    });
if(sessionStorage.getItem("role")!=null){
    this.service.getEmployee().subscribe(
      (result: any) => {
        // console.log(result)

        const first = result.name.split(' ');
        this.name = first[0];
        this.image = result.photo;
      },
      (error: any) => {
        alert('server is down Please try again later');
      }
    );}
  }
  admin: any = false;
  SignOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.checkTwo = false;
    this.checkOne = '0';
    this.router.navigate(['/']);
  }

  // Menu Toggle
  menuOpen = false;
  toggleClass() {
    this.menuOpen = !this.menuOpen;
  }

  // Menu Close on clicked links
  closeMenu() {
    this.menuOpen = false;
  }

  // User Menu Toggle
  userMenuOpen = false;
  userToggleClass($event: any) {
    $event.stopPropagation();
    this.userMenuOpen = !this.userMenuOpen;
  }
  // Close User Menu By Clicking Globaly
  onClick() {
    this.userMenuOpen = false;
  }
}
