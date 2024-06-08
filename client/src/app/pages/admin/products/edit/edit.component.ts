import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe, NgFor, CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { Category } from '../../../../../types/Category';
import { CategoryService } from '../../../../services/category.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgFor, CurrencyPipe, CommonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class ProductEditComponent {
  categories: Category[] = [];
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  categoryService = inject(CategoryService);

  editProductForm: FormGroup = new FormGroup({
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
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetail(productId!).subscribe({
      next: (product) => {
        this.editProductForm.patchValue(product);
      },
      error: (error) => {
        console.error(error.message);
      },
    });

    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }

  handleEditProduct() {
    console.log(this.editProductForm.value);
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.editProduct(productId!, { ...this.editProductForm.value, endAt: new Date() }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Update Product',
          detail: 'Successfully updated',
        });
        setTimeout(() => this.router.navigate(['/admin/products/list']), 1000);
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
