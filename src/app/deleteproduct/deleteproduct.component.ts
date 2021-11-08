import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  deleteProductForm: any;
  message:string='';
  id:any;
 
  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute,private service: ProductService) { }
  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.deleteProductForm=this.formBuilder.group({
       name : ['',Validators.required],
       price :['',Validators.required],
       quantity:  ['',Validators.required]
    })
    this.service.getProductDetailById(this.id).subscribe(data=>{
      this.deleteProductForm.patchValue(data)
      console.log(data);
    })
  }


deleteProductDetails(){
       alert("Delete clicked");
       this.service.deleteProductById(this.id,this.deleteProductForm.value).subscribe(data=>{
         this.message="Product Deleted";
       },error=>{
            this.message="product delete failed";

       
       })
       
}
}