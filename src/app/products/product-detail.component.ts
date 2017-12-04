import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private id;
  private sub;
  errorMessage: string;
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { }

  ngOnInit() {
    /* get the route params using snapshot(useful when one param is there)*/
    /*let id = +this._route.snapshot.paramMap.get('id');*/
    /*Get the route params using observable (useful when more than one params is there)*/
   /* this.sub = this._route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.pageTitle += `${this.id}`;
    this.product = {
      'productId' : this.id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };*/
   const param = this._route.snapshot.paramMap.get('id');
   if (param) {
   const id = +param;
   this.getProduct(id);
   }
  }
  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
   /*ngOnDestroy() {
    this.sub.unsubscribe();
  }*/
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
