import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.css']
})
export class AddInternComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit(): void {
    // if(sessionStorage.getItem("role")!="Admin")
    //       window.history.back()
    this.service.userStatus.emit("1")
    this.service.Status.emit(true)
  }
  onSubmit(value:any){
    console.log(value)
    this.service.addInternApi(value).subscribe((result: any) => {

      console.log(result.body)
      Swal.fire('Success', "Intern Added Sucessfully!", "success")
     
     
   }, (error: any) => {
         Swal.fire("Error","Internal Server Error","error")
   
   })
 }
  

}
