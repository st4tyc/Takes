import {
  CameraPreview,
  CameraPreviewOptions,
  CameraPreviewPictureOptions
} from '@ionic-native/camera-preview';
import { File } from '@ionic-native/file';
import { saveFiles } from '../resource/saveFiles';

export class TakeAPicture {    
  picture: string; 

  cameraOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    toBack: true
  };

  cameraPictureOpts: CameraPreviewPictureOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
    quality: 100
  };

  constructor(private cameraPreview: CameraPreview) {console.log('constructor entrou');}

  ionViewDidLoad() {    
    this.startCamera();        
  }

  startCamera() {
    this.picture = null;
    const result =  this.cameraPreview.startCamera(this.cameraOpts);
    console.log(result);
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  takePicture() {
    console.log('entrou takePicture');
    const result = this.cameraPreview.takePicture(this.cameraPictureOpts);
    var save =new saveFiles(new File);
    console.log('instanciou save');
    var data = new Date();    
    console.log('instanciou date');
    save.createDirectory();    
    this.picture = `data:image/jpeg;base64,${result}`;    
    save.savePhoto(this.picture,data.getDate()+'taps.png');

    this.cameraPreview.stopCamera();
    
  }
}