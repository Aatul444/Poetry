import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { AuthServiceService } from './services/auth-service.service';
import { ContentfulService } from './services/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poetry';
  constructor(private authService: AuthServiceService,public apiService:ApiService,private contentfulService:ContentfulService) {
    this.apiService.UStreamer.isStreamerActive
  }
  ngOnInit(){
    this.contentfulService.fetchAllEntries();
  }

}
