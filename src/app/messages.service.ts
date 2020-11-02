import { EventEmitter } from '@angular/core'
import { Message } from './message.model'
export class MessageService{
  messageAdded : EventEmitter<Message> = new EventEmitter<Message>()

  addMessage(sourceArg: string, messageArg: string){
    var newMessage = new Message(sourceArg,messageArg)
    this.messageAdded.emit(newMessage);
  }
}
