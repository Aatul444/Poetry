import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  constructor(private http: HttpClient) {}
  UStreamer: any = {
    isStreamerActive: false,
    data: {},
  };
  littleNav = false;
  
  getFBposts() {
    return this.http.get(
      'https://graph.facebook.com/v16.0/110662868634128?fields=created_time%2Cdescription%2Cid%2Cname%2Cphotos%7Blink%2Cname_tags%2Cimages%2Calt_text%2Calt_text_custom%2Cbackdated_time%2Cbackdated_time_granularity%2Ccreated_time%2Cfrom%2Cheight%2Cicon%2Cid%2Cname%2Cpage_story_id%2Cplace%2Ctarget%2Cupdated_time%2Cwebp_images%2Cwidth%2Ccomments%2Cpicture%2Clikes%7Busername%2Cpicture%2Cname%2Cid%2Cpic%2Cpic_square%7D%7D&access_token=EAAC6702eU2UBAJ4EzNcmfhikvq8tQeVae8XMxrTOZCy491Wc02XL4tywRz8cVBFA4nLKXGyLgvipIURUodXrOCutCfsoL3lM2OIHGsCebdvgPMMvWYjsxk1XS4SZBlW9T0wrfJZCPQglKDfZA36QWgGyagcZCFwOAEjZBqUl1ZCEtZAxZCdehbESZAJ6MZAH6Y4n0YqFJAIgiTjwMZAUgIOMPnuL'
    );
  }

  getYoutubeVideos() {
    const apiKey = 'AIzaSyAyhP7cM8J8QkxSl3geGaaHMZjQsC1yGfE';
    const channelId = 'UCMgty2VEtNUtgDemXw4WVIQ';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

    return this.http.get(apiUrl);
  }
}
