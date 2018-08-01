import { Camera, CameraOptions, DestinationType, EncodingType, MediaType } from '@ionic-native/camera';

var cam = new Camera;

const options: CameraOptions = {
  quality: 100,
  destinationType: DestinationType.FILE_URL,
  encodingType: EncodingType.JPEG,
  mediaType: MediaType.PICTURE
}
export class camera {    
  take(event) {  
    console.log('Passou aqui');
    console.log(options.destinationType);
    cam.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      console.log(options);      
     });
  };
  constructor() {   
  }  
  
  
  
  
}



