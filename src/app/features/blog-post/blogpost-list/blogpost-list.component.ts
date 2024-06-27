import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent {

    blogPosts$?: Observable<BlogPost[]>;
  
    constructor(private blogPostService: BlogPostService) {
  
    }
  
    ngOnInit(): void {
      // get all blog posts from API
      this.blogPosts$ = this.blogPostService.getAllBlogPosts();
    }
  
  
}
