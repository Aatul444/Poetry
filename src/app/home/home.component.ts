import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HelperService } from '../services/user/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private apiService: ApiService, private sanitizer: DomSanitizer, public helper:HelperService) {
    const lcYoutube = localStorage.getItem('pichhiliBaharYoutube') || '';
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

    this.apiService.getFBposts().subscribe((res: any) => {
      console.log(res);
      this.posts = res.data;
    });
  }
  
  posts: any[] = [];

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
}
