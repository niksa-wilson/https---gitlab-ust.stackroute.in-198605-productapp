import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductForm:any;
  message:string='';
  //Inject the FormBuilder Object into application via DI
  //Inject the ProductService into application via DI
  constructor(private formBuilder:FormBuilder,private service: ProductService) { }
   //Can't bind to 'formGroup' since it isn't a known property of 'form'.
  ngOnInit(): void {
    // this.addProductForm=new FormGroup({
    //   name :new FormControl(),
    //   price:new FormControl(),
    //   quantity: new FormControl()

    // })
    this.addProductForm=this.formBuilder.group({
       name : ['Enter the Product Name',Validators.required],
       price :['Enter the Price',Validators.required],
       quantity:  ['Enter the Quantity',Validators.required]
    })
  }
  addProductDetails(){
    alert("Add Clicked");
    console.log(this.addProductForm);
    console.log(this.addProductForm.value);
    this.service.postProductDetails(this.addProductForm.value).subscribe(data=>{
      console.log(data);
      this.message="Product Added Sucessfully";
    },
    error=>{
      this.message="Failed to add "+error.message;
      console.log(error);
    });
  }
}
