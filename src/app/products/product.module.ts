 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {ProductListComponent} from './product-list.component';
 import {ProductDetailComponent} from './product-detail.component';
 import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
 import {ProductGuardService} from './product-guard.service';
 import {StarComponent} from '../shared/star.component';
 import {FormsModule} from '@angular/forms';
 import {RouterModule} from '@angular/router';
 import {ProductService} from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
   // CommonModule,
   // FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
   // StarComponent
  ],
  providers: [ProductGuardService, ProductService]
})
export class ProductModule { }
