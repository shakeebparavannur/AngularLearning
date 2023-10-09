import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public apiData: any;
  public products:any[] = [];
  tableHeaders:string[] =['id','title','price','brand']

  constructor(private http: HttpClient) {}
 async ngOnInit () {
    const apiUrl = `https://dummyjson.com/products`;
 
    const prod= await axios.get(apiUrl);
    console.log(prod.data.products);
    this.products = prod.data.products;
  }
}
   // this.http.get(apiUrl).subscribe((data) => {
    //   this.apiData = data;
    //   console.log(data);
    //   this.products = this.apiData.products      ;
    //   console.log(data, 'sadasdasd');
    // });