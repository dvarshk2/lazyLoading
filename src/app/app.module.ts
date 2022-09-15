import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './container/about/about.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { HomeComponent } from './container/home/home.component';
import { ContactComponent } from './container/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
