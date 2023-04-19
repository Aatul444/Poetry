import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../services/user/helper.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: any[] = [];
  holaDate = '';
  addToggle = false;
  registerForm: any;
  queryForm: any;
  itemsprof = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  images = [
    // {
    //   imageSrc: 'assets/slide2.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide3.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide5.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide6.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide7.jpeg',
    //   imageAlt: 'Danish',
    // },
    // {
    //   imageSrc: 'assets/slide8.jpeg',
    //   imageAlt: 'Danish',
    // },
  ];
  youtubeVideos: any[] = [];
  instasPosts: any = [];

  constructor(
    public apiService: ApiService,
    private sanitizer: DomSanitizer,
    public helper: HelperService,
    private http: HttpClient,
    public afStore: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.fetchAllData();
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    this.queryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
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
    //   .update({response:JSON.stringify(this.instasPosts)})
    //   .then(() => {

    //     console.log(this.instasPosts,"Document updated successfully.");
    //   })
    //   .catch((error) => {
    //     console.log("Error updating document: ", error);
    //   });
    // })
  }

  registerUser() {
    const formData = this.registerForm.value;
    console.log(formData);
    const date = new Date();
    this.holaDate =
      date.getDate().toString() +
      ' ' +
      this.getDateMonth(date.getMonth()) +
      ',' +
      date.getFullYear().toString();
    formData.date = this.holaDate;
    if (this.registerForm.status === 'VALID') {
      this.afStore
        .collection('regForm')
        .add(formData)
        .then((res) => {
          alert('Query sent successfully!');
          this.registerForm.reset();
        });
    }
  }

  getDateMonth(month: number) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month];
  }
  sendQuery() {
    const formData = this.queryForm.value;
    const date = new Date();
    this.holaDate =
      date.getDate().toString() +
      ' ' +
      this.getDateMonth(date.getMonth()) +
      ',' +
      date.getFullYear().toString();
    formData.date = this.holaDate;
    if (this.queryForm.status === 'VALID') {
      this.afStore
        .collection('queries')
        .add(formData)
        .then((res) => {
          alert('Query sent successfully!');
          this.queryForm.reset();
        });
    }
  }

  fetchAllData() {
    // this.afStore.collection('website').doc('pichhili_Bahar_Instagram').get().subscribe(res=>{console.log(res.data())})
    // this.afStore.collection('website').doc('pichhili_Bahar_facebook').get().subscribe((res:any)=>{console.log(res.data().response)})
    this.afStore
      .collection('website')
      .doc('pichhili_Bahar_Youtube')
      .get()
      .subscribe((res: any) => {
        this.youtubeVideos = res.data().response;
      });
  }

  selectVideo(video: any) {
    this.apiService.UStreamer.data = video;
    this.apiService.UStreamer.isStreamerActive = true;
    console.log(this.apiService.UStreamer);
  }
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
