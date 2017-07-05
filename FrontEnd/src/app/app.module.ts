import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { MessageService} from './message.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule 
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
