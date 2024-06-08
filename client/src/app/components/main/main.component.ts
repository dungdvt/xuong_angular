import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { CommonModule, NgFor, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../types/Product';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, SlicePipe, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterValue: string = '';

  productService = inject(ProductService);

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filter();
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  filter() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}
