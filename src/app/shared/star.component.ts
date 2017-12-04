import {Component, EventEmitter, Input , OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number ;
  @Output() ratingCicked: EventEmitter<string> = new EventEmitter<string>();
  onClick(): void {
    this.ratingCicked.emit(`the rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
}
