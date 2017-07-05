import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './NewMessages.component';
import { MessageService} from './message.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
