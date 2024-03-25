import { Component, Input } from '@angular/core';
import { CarouselModule } from "primeng/carousel";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";


@Component({
  selector: 'app-cc-carousel',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './cc-carousel.component.html',
  styleUrl: './cc-carousel.component.scss'
})
export class CcCarouselComponent {
  @Input() products: { name: string, img: string }[] = [{ name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }, { name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }, { name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }, { name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }, { name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }, { name: 'Concac', img: 'https://file.hstatic.net/1000075078/file/desktop_8332203abae349ff9e7a3ec88a9402fb.jpg' }];
  @Input() responsiveOptions: any[] | undefined;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
