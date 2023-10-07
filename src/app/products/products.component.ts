import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public apiData: any;
  products = [];
  /**
   *
   */
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const apiUrl = `https://dummyjson.com/products`;
    this.http.get(apiUrl).subscribe((data) => {
      this.apiData = data;
      console.log(data);
      this.products = this.apiData.products      ;
      console.log(data, 'sadasdasd');
    });
  }
}
