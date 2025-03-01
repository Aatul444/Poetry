import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
import { environment } from '../../../environments/environment';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private environment = environment;
  entriesSignal = signal<Entry<any>[]>([]);
  private client = createClient({
    space: environment.contentFul.blogs.spaceID,
    accessToken: environment.contentFul.blogs.accessTokens.contentDelivery,
  });

  constructor() {}

  fetchAllEntries(): void {
    this.client
      .getEntries()
      .then((response: any) => {
        this.entriesSignal.set(response.items);
      })
      .catch((error: any) => {
        console.error('Error fetching entries:', error);
        this.entriesSignal.set([]);
      });
  }

  getEntriesSignal() {
    return this.entriesSignal();
  }

  markDownToHtml(md:string){
    return marked(md);
  }
}
