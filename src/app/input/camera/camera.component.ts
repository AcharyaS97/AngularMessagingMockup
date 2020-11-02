import { Component, OnInit,ViewChild,ElementRef, Renderer2 } from '@angular/core';
import { WindowRef } from '../../window.service'
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  @ViewChild('#camera', {static : true}) cameraDiv : ElementRef;

  videoWidth = 0;
  videoHeight = 0;

  constraints = {
    video: {
        facingMode: "user",
        width: { ideal: 4096 },
        height: { ideal: 2160 }
    }
  };

  constructor(private window :WindowRef, private renderer : Renderer2) { }

  ngOnInit(): void {
  }

  openCamera(){

    if (!!(this.window.nativeWindow.navigator.mediaDevices && this.window.nativeWindow.navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
         } else {
             alert('Sorry, camera not available.');
         }
  }

  handleError(error) {
    console.log('Error: ', error);
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
  }

}
