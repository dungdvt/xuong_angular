import { Component, inject } from '@angular/core';



import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../../types/Product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf,FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterValue: string = '';

  constructor(private productService: ProductService) { }

  // cal api ngOnInit
  ngOnInit() {
    this.loadAllData();
  }
  loadAllData() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      this.filter();
      console.log(this.products);
    });
    
  }

  onDeleteProduct(id: any): void {
    const conf = window.confirm('are you sure you want to delete this product?');
    if (conf) {
      this.productService.deleteProduct(id).subscribe((data) => {
        this.loadAllData();
        console.log(data);
        alert("Product deleted successfully");
      });
    }
  }
  // search
  filter() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    console.log(this.filteredProducts);

  }

}
