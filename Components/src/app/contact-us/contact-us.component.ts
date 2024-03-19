import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private service:MainService) { }
  data:any;
  ngOnInit(): void {
    
    this.service.Status.emit(true)
    if (sessionStorage.getItem("role")=="Admin") {
      this.service.userStatus.emit("1");
     } else if(sessionStorage.getItem("role")=="Intern") {
       this.service.userStatus.emit("2");
     }
  }

  onSubmit(value: any) {
    console.log(value);
   this.service.addQuery(value).subscribe((result:any)=> {
     Swal.fire('<br><p>"Successful!"</p>')
     console.log(result.body);
   }, (error: any) => {
     alert("UnSuccessful!")
   })
   
 }

}
