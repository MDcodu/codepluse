import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost) : Observable<BlogPost>{
    console.log(`${environment.apiBaseUrl}/api/BlogPosts`);
   return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPosts`, data);
  }
}
