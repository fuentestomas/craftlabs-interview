import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ProductI from '../../Interfaces/ProductI'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductI[];

  constructor(
    private http: HttpClient
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.http.get<ProductI>('http://localhost:3000/products')
    .subscribe((data: any) => {
      this.products = data;
  })
  }

}
