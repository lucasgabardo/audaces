import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageSrc: string;
  @Input() type: string;
  favorited = false;

  constructor() {
    this.title = "";
    this.subtitle = "";
    this.imageSrc = "";
    this.type = "horizontal";
  }

  toggleFavorite(){
    this.favorited = !this.favorited;
  }
}
