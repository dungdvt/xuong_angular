import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe, NgFor, CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { Category } from '../../../../../types/Category';
import { CategoryService } from '../../../../services/category.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, NgFor, CurrencyPipe, CommonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]
})
export class ProductAddComponent {
  categories: Category[] = [];
  productService = inject(ProductService);
  router = inject(Router);
  messageService = inject(MessageService);
  categoryService = inject(CategoryService);

  addProductForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    isShow: new FormControl(true),
    startAt: new FormControl('', [Validators.required]),
    times: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }

  handleCreateProduct() {
    console.log(this.addProductForm.value);
    this.productService
      .createProduct( this.addProductForm.value)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Create Product',
            detail: 'Thanh Cong',
          });
          setTimeout(
            () => this.router.navigate(['/admin/products/list']),
            1000
          );
        },
        error: (error) => {
          console.error(error.message);
        },
      });
  }
}
