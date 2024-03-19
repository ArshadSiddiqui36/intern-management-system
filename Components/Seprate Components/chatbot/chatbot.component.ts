import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Chat Section Open/Close
  chatOpen = false;
  toggleClass($event: any) {
    this.chatOpen = !this.chatOpen;
  }
}
