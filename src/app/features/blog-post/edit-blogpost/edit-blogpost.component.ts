import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../category/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { CategoryService } from '../../category/services/category.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrl: './edit-blogpost.component.css'
})
export class EditBlogpostComponent implements OnInit, OnDestroy {
  id: string | null = null;
  model?: BlogPost;
  categories$? : Observable<Category[]>;
  selectedCategories?: string[];


  routeSubscription?: Subscription;
  getBlogPostSubscription?: Subscription;



  constructor(private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private categoryService: CategoryService,
    private router:Router) {

  }

  ngOnInit(): void {
    
    this.categories$ = this.categoryService.getAllCategories();
    
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        // Get BlogPost From API
        if (this.id) {
          this.getBlogPostSubscription = this.blogPostService.getBlogPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id);

            }
          });
          ;
        }
      }
    });
  }

  onFormSubmit(): void {
    // Convert this model to Request Object

  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getBlogPostSubscription?.unsubscribe();  
  }
}
