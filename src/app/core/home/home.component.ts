import { Component } from '@angular/core';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [L10nTranslateAsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
