import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../services/user/helper.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: any[] = [];
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    public helper: HelperService,
    private http: HttpClient,
    public afStore: AngularFirestore
  ) {
    this.fetchAllData();
    // this.afStore
    //   .collection('website')
    //   .get()
    //   .subscribe((querySnapshot) => {
    //     this.items = [];
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc, doc);
    //       this.items.push(doc.data());
    //     });
    //     console.log('items', this.items);
    //   });
    // apiService.getFBposts().subscribe((fbPost:any)=>{
    //   console.log(fbPost.photos.data)
    //   this.instasPosts=fbPost.photos.data
    //   this.afStore
    //   .collection("website")
    //   .doc('pichhili_Bahar_facebook')
    //   .update({response:this.youtubeVideos})
    //   .then(() => {
    //     console.log("Document updated successfully.");
    //   })
    //   .catch((error) => {
    //     console.log("Error updating document: ", error);
    //   });
    // })
  }

  name = '';
  email = '';
  message = '';

  images = [
    {
      imageSrc: 'assets/slide7.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide2.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide3.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide4.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide5.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide6.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide7.jpeg',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide8.jpeg',
      imageAlt: 'Danish',
    },
  ];

  youtubeVideos: any[] = [];

  fetchAllData() {
    this.afStore.collection('website').doc('pichhili_Bahar_Instagram').get().subscribe(res=>{console.log(res.data())})
    this.afStore.collection('website').doc('pichhili_Bahar_facebook').get().subscribe(res=>{console.log(res.data())})
    this.afStore.collection('website').doc('pichhili_Bahar_Youtube').get().subscribe((res:any)=>{this.youtubeVideos = res.data().response})
  }
  selectVideo(video: any) {
    this.apiService.UStreamer.data = video;
    this.apiService.UStreamer.isStreamerActive = true;
    console.log(this.apiService.UStreamer);
  }

  sendQuery() {
    const queryData = {
      title: this.name,
      subject: this.email,
      description: this.message,
    };
    this.afStore.collection('queries').add(queryData).then(res=>
      {
        alert('Query sent successfully!');
      })
  }
  instasPosts: any = [];
}

// write data in firestore collection**
//  this.afStore
// .collection("website")
// .doc('pichhili_Bahar_Youtube')
// .update({response:this.youtubeVideos})
// .then(() => {
//   console.log("Document updated successfully.");
// })
// .catch((error) => {
//   console.log("Error updating document: ", error);
// });
// write data in firestore collection**
