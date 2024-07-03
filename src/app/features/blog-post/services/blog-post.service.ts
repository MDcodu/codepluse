import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogPost(data: AddBlogPost) : Observable<BlogPost> {
    console.log(`${environment.apiBaseUrl}/api/BlogPosts`, data);
   return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPosts`, data);
  }
  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }

  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${urlHandle}`);
  }

  updateBlogPost(id: string, updateBlogPost: UpdateBlogPost) : Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`, updateBlogPost);
  }
  deleteBlogPost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
  }
}
