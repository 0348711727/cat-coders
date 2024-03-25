import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CcCarouselComponent } from '@app/commons/cc-carousel/cc-carousel.component';
import { CcDropdownComponent } from '@app/commons/cc-dropdown/cc-dropdown.component';
import { CcInputComponent } from '@app/commons/cc-input/cc-input.component';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [L10nTranslateAsyncPipe, CcInputComponent, CcDropdownComponent, CcCarouselComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public router: Router) { }
  products: any = [{ image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' },
  { image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' },
  { image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' },
  { image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' },
  { image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' },
  { image: 'https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_8282f6c2cf4d49bba2dfbe70cb7dbede_large.jpg', url: 'abc', title: "Cloud Fee Hạnh Nhân nướng", price: '49000' }]
  onChange(event: string | null) {
    console.log(event)
  }
  index: number = 0;
}
