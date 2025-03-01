import { Component, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogId: any;
  blogPosts: any = [];
  categories: any = [];
  blogPost: any = {};

  constructor(
    private router: Router,
    private contentfulService: ContentfulService,
    private activatedRoute: ActivatedRoute
  ) {
    this.useEffect();
    this.blogId = this.activatedRoute.snapshot.paramMap.get('blogTitle') || '';
  }

  useEffect() {
    effect(() => {
      this.categories = [];
      this.blogPosts = this.contentfulService.getEntriesSignal();
      this.getCategories();
      this.setCurrentBlogPost()
    });
  }

  ngOnInit(): void {

  }

  setCurrentBlogPost(){
    this.blogPosts.forEach((blogPost: any) => {
      if(blogPost.fields.slug === this.blogId){
        this.blogPost = blogPost;
        }
        });
  }

  openBlog(blogId: any) {
    this.router.navigate(['blog', blogId]);
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

  getCategories() {
    this.categories = [
      ...new Set(
        this.categories.concat(
          ...this.blogPosts.flatMap((post: any) => post?.fields?.hashtags || [])
        )
      ),
    ];
  }
  richTextToHtml(richText: any): string {
    return documentToHtmlString(richText);
  }
}
