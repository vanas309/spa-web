import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  products = [
    { name: 'Laptop', category: 'Electronics', price: 1200, stockCount: 5 },
    { name: 'Headphones', category: 'Audio', price: 45, stockCount: 0 },
    { name: 'Desk Lamp', category: 'Home', price: 70, stockCount: 12 },
    { name: 'USB Cable', category: 'Accessories', price: 15, stockCount: 0 },
    { name: 'Monitor', category: 'Electronics', price: 250, stockCount: 3 }
  ];
}
