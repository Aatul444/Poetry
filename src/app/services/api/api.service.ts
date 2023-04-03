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
  littleNav = false;
  
  getFBposts() {
    return this.http.get(
      'https://graph.facebook.com/v16.0/110662868634128?fields=created_time%2Cdescription%2Cid%2Cname%2Cphotos%7Blink%2Cname_tags%2Cimages%2Calt_text%2Calt_text_custom%2Cbackdated_time%2Cbackdated_time_granularity%2Ccreated_time%2Cfrom%2Cheight%2Cicon%2Cid%2Cname%2Cpage_story_id%2Cplace%2Ctarget%2Cupdated_time%2Cwebp_images%2Cwidth%2Ccomments%2Cpicture%2Clikes%7Busername%2Cpicture%2Cname%2Cid%2Cpic%2Cpic_square%7D%7D&access_token=EAAC6702eU2UBANbzxO5mchnxRL9ltccU5OCNL55qawtCZBmNILcDGNNqqt1raU0SZCZATwKfJt5czlCHhCVfHmX6Kb37tEr8365jRFBeXwq5ZCFimCRsjYTI9uHXo6MKEu1qfCfgsyYK38zPWeuR4CsugHRxZBXpjZCmWsvXbdr2EL5QxTG4hJxHOBvfXByG9mnvEu0ezeW6wtTRSikcZAK'
    );
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
