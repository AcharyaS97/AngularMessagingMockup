import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { WindowRef } from './window.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CameraComponent } from './input/camera/camera.component'
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
