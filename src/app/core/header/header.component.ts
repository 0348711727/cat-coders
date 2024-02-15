import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { L10nTranslationService } from 'angular-l10n';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FooterComponent, CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _router: Router,
    private _transaltionService: L10nTranslationService) {
  }
  isActive: boolean = false;
  concac: string = 'concac';
  listNavbar: { [key: string]: string }[] = [
    { title: this._transaltionService.translate('HOME'), url: '' },
    { title: this._transaltionService.translate('ABOUT'), url: 'about' },
    { title: this._transaltionService.translate('SERVICES'), url: 'services' },
    { title: this._transaltionService.translate('EVENTS'), url: 'events' },
    { title: this._transaltionService.translate('MENU'), url: 'menu' },
    { title: this._transaltionService.translate('CONTACT'), url: 'contact' }
  ];
  navigateTo(path: string) {
    this._router.navigate([path]);
  }

}
