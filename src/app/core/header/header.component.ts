import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FooterComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _router: Router,) {
  }
  isActive: boolean = false;
  concac: string = 'concac';
  RESOURCE_SERVER_URL: string = '';
  navigateTo(path: string) {
    this._router.navigate([path]);
  }

}
