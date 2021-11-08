import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  //  Inject the service into application via DI
  constructor(private service:ProductService) { }
  // Empty Product Array
  productList:Product[]=[];
  message:string='';
  ngOnInit(): void {

    this.service.getAllProductDetails().subscribe(data=>{
          this.productList=data;
          console.log(this.productList)
    },error=>{
        this.message=error.message;
    })

  }

}
