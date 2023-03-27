import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private accessToken: string = 'YOUR_ACCESS_TOKEN';
  private pageId: string = 'YOUR_PAGE_ID';
  private apiUrl: string = `https://graph.facebook.com/v13.0/${this.pageId}/posts?access_token=${this.accessToken}`;

  constructor(private http: HttpClient) {}
  UStreamer: any = {
    isStreamerActive: false,
    data: {},
  };
  littleNav=false;
  getFBposts() {
    return this.http.get(this.apiUrl);
  }
  getYoutubeVideos() {
    const apiKey = 'AIzaSyAyhP7cM8J8QkxSl3geGaaHMZjQsC1yGfE';
    const channelId = 'UCMgty2VEtNUtgDemXw4WVIQ';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

    return this.http.get(apiUrl);
    //  return this.http
    //     .get('https://www.googleapis.com/youtube/v3/search', {
    //       params: {
    //         key: 'AIzaSyCcqajKIPSIBb17YUVoQRdqL20GcsolKYA',
    //         channelId: 'UCMgty2VEtNUtgDemXw4WVIQ',
    //         part: 'snippet',
    //         maxResults: '10',
    //         type: 'video',
    //       },
    //     })
  }
}
