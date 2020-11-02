export class Message{
  constructor(private source : string, private message:string){}

  getSource(){
    return this.source;
  }

  getMessage(){
    return this.message;
  }
}
