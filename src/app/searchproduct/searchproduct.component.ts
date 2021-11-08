import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
   searchForm:any;
   flag:any;
   product: Product= new Product();
   display:string='none';
  constructor(private formBuilder: FormBuilder,private service:ProductService) { }

  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      searchId: ['']
    })
  }
    searchProductById(){
      let id=this.searchForm.controls["searchId"].value;
      alert(id);
      this.service.getProductDetailById(id).subscribe(data=>{
             this.product=data;
             this.display='block';
             this.flag=true;
             console.log(this.product);
               console.log(this.product);

      },error=>{
          console.log(error.message);
         this.flag=false;
         this.display='block';
      });
    }
  }




