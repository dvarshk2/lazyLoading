import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './container/about/about.component';
import { ContactComponent } from './container/contact/contact.component';
import { HomeComponent } from './container/home/home.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'about', component: AboutComponent},
  // {path : '/products', component : ProductsComponent }
  {path : 'products', loadChildren : () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
