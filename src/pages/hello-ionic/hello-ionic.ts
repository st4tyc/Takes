import { Component } from '@angular/core';
import { camera } from '../resource/camera';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  takeAPiture(event) {
    var cam = new camera();
    cam.take(event);
  };
}
