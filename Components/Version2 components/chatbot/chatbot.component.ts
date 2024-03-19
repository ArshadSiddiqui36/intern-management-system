import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  socket: any;
  value: any;
  message:any;
  constructor() {
    this.socket = io("http://localhost:3000")
  }

  chatOpen = false;
  toggleClass($event: any) {
    console.log("jj")
    console.log(event)
    this.chatOpen = !this.chatOpen;
  }
  ngOnInit(): void {

    // Chat Section Open/Closen
    const name=prompt("enter name")
    this.socket.emit("user-joined", name)
    this.socket.on("user-joined", (name: String) => {
      console.log(document.getElementById("sends"))
      this.value = name
      this.add(this.value + "joined !!!!")
      // if(document.getElementById("send") == null)
      // document.getElementById("sends")?.innerHTML.
      // messageinput.innerText="dddddd"
    })
    this.socket.on("receive", (name: any) => {
      // console.log(document.getElementById("sends"))
      // if(document.getElementById("send") == null)
      console.log(name)
      var textnode = document.createTextNode(name.message);
      this.value = name
      // messageinput.innerText="dddddd"
      // this.forms.patchValue({
      //   Message: this.value
      // })
      this.add({value:2,data:this.value})
    })
  }
  getControl() {
    return (this.forms.get('Message') as FormArray).controls;
  }
  add(chat: any) {
    const leaveData = new FormGroup({
      title: new FormControl(chat.data.message),
      name:new FormControl(chat.data.name),
      value:new FormControl(chat.value)
    });
    (<FormArray>this.forms.get("Message")).push(leaveData);
  }
  forms: any = new FormGroup(
    {
      Message: new FormArray([

        new FormControl("")

      ])
    }
  )
  changeTime() {
    // new Date("2021-12-06T10:06").getDate()
    
      return new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    
  }
  onSubmit() {
    console.log(this.message)
    this.add({value:1,data:{message:this.message,name:""}})
    this.socket.emit("send",this.message)

  }
}
