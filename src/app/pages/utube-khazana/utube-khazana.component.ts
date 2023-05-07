import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api/api.service';
import { HelperService } from 'src/app/services/user/helper.service';

@Component({
  selector: 'app-utube-khazana',
  templateUrl: './utube-khazana.component.html',
  styleUrls: ['./utube-khazana.component.scss']
})
export class UtubeKhazanaComponent {
  constructor(
    public apiService: ApiService,
    private sanitizer: DomSanitizer,
    public helper: HelperService,
    private http: HttpClient,
    public afStore: AngularFirestore,
    private fb: FormBuilder
  ){
    this.afStore.collection('website').doc('pichhili_Bahar_Youtube').get().subscribe((res: any) => {this.youtubeVideos = res.data().response});
  }
  youtubeVideos: any[] = [];
  selectVideo(video: any) {
    this.apiService.UStreamer.data = video;
    this.apiService.UStreamer.isStreamerActive = true;
    console.log(this.apiService.UStreamer);
  }
}
