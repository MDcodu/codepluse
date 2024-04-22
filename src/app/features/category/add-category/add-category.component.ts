import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{
  
  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;

  constructor(private categoryServices: CategoryService) {
    this.model = {
      name:'',
      urlHandle:''
    };
  }
  
  
  onFormSubmit(){

    this.addCategorySubscribtion = this.categoryServices.addCategory(this.model).subscribe({
      next:(response)=>{
        console.log('Succes')
        this.model = {
          name:'',
          urlHandle:''
        }
      },
      error: (error)=>{
        console.log('Error');
        this.model = {
          name:'',
          urlHandle:''
        }
      }
    })

  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}
