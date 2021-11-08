import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  updateProductForm: any;
  message:string='';
  id:any;
//inject activateed root
  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute,private service: ProductService){ }

    ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.updateProductForm=this.formBuilder.group({
       name : ['',Validators.required],
       price :['',Validators.required],
       quantity:  ['',Validators.required]
    })
    this.service.getProductDetailById(this.id).subscribe(data=>{
      this.updateProductForm.patchValue(data)
      console.log(data);
    })
  }


updateProductDetails(){
       alert(this.id);
       this.service.updateProductById(this.id,this.updateProductForm.value).subscribe(data=>{
         this.message="Product Updated";
       },error=>{
            this.message="product update failed";

       
       })
       
}
}