import { File } from '@ionic-native/file';


export class saveFiles {
    pictureDir: string;

    constructor(public file: File) {
        this.pictureDir = this.file.applicationDirectory
    };
    createDirectory() {
        this.file.checkDir(this.pictureDir, 'taps')
      .then(_ => {
        console.log('Directory exists');

      })
      .catch(err => { 
        console.log('Directory doesnt exist');
        console.log(this.pictureDir);
        this.file.createDir(this.pictureDir, 'taps', false)
        .then(
          (files) => {
            // do something
            console.log("success");
          }
        ).catch(
          (err) => {
            // do something
            console.log("error"); // i am invoking only this part
          }
        );
       });       
    }

    b64toBlob(b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    public savePhoto(base64: string, name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            var realData = base64.split(",")[1]
            let blob = this.b64toBlob(realData, 'image/jpeg')

            this.file.writeFile(this.pictureDir, name, blob)
                .then(() => {
                    resolve(this.pictureDir + name);
                })
                .catch((err) => {
                    console.log('error writing blob')
                    reject(err)
                })
        })
    }
}