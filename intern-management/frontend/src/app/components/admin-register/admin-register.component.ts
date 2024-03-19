import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private service:MainService) {

  }

  ngOnInit(): void {
  
  }
  onSubmit(value:any){
    console.log(value)
    this.service.registerApi(value).subscribe((result: any) => {
        Swal.fire("Admin registered Sucesfully!")
       console.log(result.body)
      
    }, (error: any) => {
      alert("server is down Please try again later")
    })
  }

}
