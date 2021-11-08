import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { HttpClient} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class ProductService{


    constructor(private httpClient: HttpClient){

    }

    postProductDetails(product:Product): Observable<any>{
        let url="http://localhost:3000/products";
        let headers={'content-type':'application/json'};
        let productJsonData=JSON.stringify(product);
        let data=this.httpClient.post<Product>(url,productJsonData,{headers:headers});

        data.forEach((product) => {
            console.log('${product.id}---${product.name}----${product.price}----${product.quantity}')
            
        })
        return data;
    }

    getAllProductDetails():Observable<Product[]>{
      let url="http://localhost:3000/products";
      return this.httpClient.get<Product[]>(url);

    }

    getProductDetailById(id:any):Observable<Product>{
        let url="http://localhost:3000/products/"+id;
        return this.httpClient.get<Product>(url);
    }

    updateProductById(id:any,product:Product):Observable<any>{
        let url="http://localhost:3000/products/"+id;
        return this.httpClient.put<Product>(url,product);
        

    }
    deleteProductById(id:any,product:Product):Observable<any>{
        let url="http://localhost:3000/products/"+id;
      return this.httpClient.delete<Product>(url);
        
    }
}