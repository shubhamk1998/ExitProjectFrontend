import { AdminService } from './../services/AdminService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SellercomponentComponent } from './sellercomponent/sellercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { SellerService } from 'src/services/SellerService';
import { ProductsService } from 'src/services/ProductsService';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { ProductshomeComponent } from './productshome/productshome.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AddupdateproductComponent } from './addupdateproduct/addupdateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    LogincomponentComponent,
    SellercomponentComponent,
    FootercomponentComponent,
    RegistercomponentComponent,
    ProductshomeComponent,
    SingleproductComponent,
    AddupdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [AdminService,SellerService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
