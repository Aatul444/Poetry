import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { Blog } from '../../../models/models';
import { Entry } from 'contentful/dist/types/types/entry';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent {
  blogPosts: any = []
  categories:any = [];

  constructor(private router: Router, private contentfulService: ContentfulService) {
    this.useEffect();
  }

  useEffect() {
    effect(() => {
      this.categories=[];
      this.blogPosts = this.contentfulService.getEntriesSignal();
      this.getCategories()
    })
  }

  ngOnInit(): void { }

  openBlog(blogId: any) {
    this.router.navigate(['blog', blogId])
  }

  blogDateFormat(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  
getCategories(){
  this.categories = [...new Set(this.categories.concat(...this.blogPosts.flatMap((post: any) => post?.fields?.hashtags || [])))];
}
  richTextToHtml(richText: any): string {
    return documentToHtmlString(richText);
  }
}
