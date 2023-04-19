import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  constructor(
    private storage: AngularFireStorage
  ) {
    this.fetchAllGalleryImages();
  }

  images: any[] = [];

  fetchAllGalleryImages() {
    const storageRef = this.storage.storage.ref().child('gallery');
    storageRef
      .listAll()
      .then((res: any) => {
        const promises = res.items.map((item: any) => item.getDownloadURL());
        Promise.all(promises)
          .then((downloadURLs: string[]) => {
            console.log(downloadURLs);
            this.images = downloadURLs;
          })
          .catch((error: any) => {
            console.error(error);
          });
      })
      .catch((error: any) => console.log(error));
  }
}
