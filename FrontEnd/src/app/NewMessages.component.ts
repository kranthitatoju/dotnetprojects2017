import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-newmessages',
  template:`
<md-card style="margin:8px">
  <md-input-container>
    <input mdInput [(ngModel)]="message.owner" placeholder="Name">
  </md-input-container>
  <md-input-container>
    <textarea mdInput [(ngModel)]="message.text" placeholder="Message"></textarea>
  </md-input-container>
 <md-card-actions> <button (click)="post()" md-button color="primary">post message</button>
 </md-card-actions>
</md-card>
  `,
  styleUrls: [],
  providers: [MessageService]
})
export class NewMessagesComponent {
  @Output() postevent = new EventEmitter();
  constructor(private webservice: MessageService ){}

     message={
      "owner":"",
      "text":""
    };

    post()
    {
      this.webservice.postMessages(this.message);
      this.postevent.emit(this.message);
    }


}
