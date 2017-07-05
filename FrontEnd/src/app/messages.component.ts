import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-messages',
  template:`
<h1>this is the messages board"</h1>
  <div *ngFor = "let value of messages" >
  <md-card style="margin:8px">
  <md-card-title>by:{{value.owner}}</md-card-title>
  <md-card-content>{{value.text}}</md-card-content>
  
  </md-card>
  </div>
  `,
  styleUrls: [],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {

  constructor(private webservice: MessageService ){}

  async ngOnInit() {
      var resposne = await this.webservice.getMessages();
      this.messages = resposne.json();
  }
  messages = []


 

}
