import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';


const routes: Routes = [
  {path:"add-product",component:AddproductComponent},
  {path:"list-product",component:ListproductComponent},
  {path:"search-product",component:SearchproductComponent},
  {path:"update-product/:id",component:UpdateproductComponent},
  {path:"delete-product/:id", component:DeleteproductComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
