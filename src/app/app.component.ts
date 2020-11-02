import { Component, OnInit } from '@angular/core';
import { MessageService } from './messages.service'
import { Message } from './message.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent implements OnInit {
  title = 'SampleAngularApp';
  listOfMessages : Array<Message> = []

  constructor(private messageService : MessageService){}

  ngOnInit(){
    this.messageService.messageAdded.subscribe((newMessage)=>{
      this.listOfMessages.push(newMessage);
    })
  }

}
