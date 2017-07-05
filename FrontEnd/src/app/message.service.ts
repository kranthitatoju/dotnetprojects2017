import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class MessageService {
 messages = [];
  constructor(private http: Http ) {
    this.getMessages();
   }
   
  async getMessages(){
    var response = await this.http.get('http://localhost:57055/api/messages').toPromise();
    this.messages = response.json();
    console.log("from get messages"+response.json());
  }
  async postMessages(message){
   var response =  await this.http.post('http://localhost:57055/api/messages',message).toPromise();
   this.messages.push(response.json());
   console.log("from post "+response.json());
    this.getMessages();
    
  }
}
