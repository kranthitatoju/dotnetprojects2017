import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class MessageService {

  constructor(private http: Http ) { }

  getMessages(){
    return this.http.get('http://localhost:57055/api/messages').toPromise();
  }

}
