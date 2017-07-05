import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './NewMessages.component';
@Component({
  selector: 'app-root',
  template: `
  <h1>Messages Board</h1>
<app-newmessages></app-newmessages>
<app-messages></app-messages>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}