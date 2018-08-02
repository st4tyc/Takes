import { Component } from '@angular/core';
import { TakeAPicture } from '../resource/TakeAPicture';
import { CameraPreview } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  takeAPiture(event) {
    var cam = new TakeAPicture(new CameraPreview);
    cam.takePicture()        
  };
}
