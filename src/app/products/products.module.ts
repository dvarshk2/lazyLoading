import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './products/mobile/mobile.component';
import { TabsComponent } from './products/tabs/tabs.component';

const routes : Routes = [
  {path : '', component: ProductsComponent, children: [
    {path :'', redirectTo : 'mobile' , pathMatch : 'full'},
    {path :'mobile', component: MobileComponent},
    {path : 'tabs', component : TabsComponent}
  ]
}
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('Products Module is loaded');
    
  }
}
