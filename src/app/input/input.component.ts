import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../messages.service';
import { WindowRef } from '../window.service';
import { Renderer2 } from '@angular/core';
import { faCamera,faMap, faFolder } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  constructor(private window : WindowRef,private messageService:MessageService, private renderer : Renderer2) { }

  uploadedFileName = ''

  mapIcon = faMap;
  cameraIcon = faCamera;
  folderIcon = faFolder;

  inputTextString : string;

  ngOnInit(): void {
    this.inputTextString = "Please Type Here...";
  }

  onSend(input : ElementRef){
    this.inputTextString = input.nativeElement.value;
    if (this.inputTextString === 'location'){
      this.getLocation();
    }
    else{
      this.messageService.addMessage("Customer",this.inputTextString);
    }

  }

  getLocation(): void{

    if (this.window.nativeWindow.navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude.toFixed(3);
          const latitude = position.coords.latitude.toFixed(3);
          this.inputTextString = `Latitude:${latitude} Longitude:${longitude}`;
          this.messageService.addMessage('[LOCATION]',this.inputTextString);
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  openFileBrowser(event : any, src : string){
    event.preventDefault()

    let element : HTMLElement = document.getElementById(src) as HTMLElement;

    element.click()
  }

  onFileChange(event : any){
    let files = event.target.files;
    this.uploadedFileName = files[0].name
  }
}
