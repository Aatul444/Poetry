import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-u-tube-streamer',
  templateUrl: './u-tube-streamer.component.html',
  styleUrls: ['./u-tube-streamer.component.scss'],
})
export class UTubeStreamerComponent {
  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {
    this.streamURL = this.getSafeUrl(apiService.UStreamer.data?.id?.videoId);
  }

  streamURL: any;

  closeModal() {
    this.apiService.UStreamer.isStreamerActive = false;
  }

  getSafeUrl(vidId: string) {
    const unsafeVideoUrl = 'https://www.youtube.com/embed/' + vidId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeVideoUrl);
  }
}
