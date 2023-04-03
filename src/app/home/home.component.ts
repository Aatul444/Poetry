import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../services/user/helper.service';
import { HttpClient } from '@angular/common/http';

// import { FB } from 'facebook-js-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer,
    public helper: HelperService,
    private http: HttpClient
  ) {
    this.apiService.getFBposts().subscribe((res:any)=>{console.log(res)})
    const lcYoutube = localStorage.getItem('pichhiliBaharYoutube') || '';
    const lcInsta = localStorage.getItem('pichhiliBaharInsta') || '';
    if (lcYoutube === '') {
      this.apiService.getYoutubeVideos().subscribe((videos: any) => {
        localStorage.setItem(
          'pichhiliBaharYoutube',
          JSON.stringify(videos.items)
        );
      });
    } else {
      this.youtubeVideos = JSON.parse(lcYoutube);
    }
    if (lcInsta === '') {
      this.apiService.getYoutubeVideos().subscribe((videos: any) => {
        localStorage.setItem(
          'pichhiliBaharInsta',
          JSON.stringify(videos.items)
        );
      });
    } else {
      this.instasPosts = JSON.parse(lcInsta);
    }
  }

  name = '';
  email = '';
  message = '';

  images = [
    {
      imageSrc: 'assets/slide1.png',
      imageAlt: 'Danish',
    },
    {
      imageSrc: 'assets/slide1.png',
      imageAlt: 'Danish',
    },
  ];

  youtubeVideos: any[] = [];

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
    // const dbRef = firebase.database().ref('queries');
    // dbRef.push(queryData);
    alert('Query sent successfully!');
  }
  instasPosts:any=[]
  
}
