import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-messages',
  templateUrl:'messages.component.html',
  styleUrls: [],
  providers: [MessageService]
})
export class MessagesComponent{
  constructor(private webservice: MessageService ){}
}
