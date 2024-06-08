import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../types/Product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterValue: string = '';

  constructor(private productService: ProductService) { }

  loadAllData() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      this.filter();
      console.log(this.products);
    });
    
  }

  filter() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    console.log(this.filteredProducts);

  }
}

