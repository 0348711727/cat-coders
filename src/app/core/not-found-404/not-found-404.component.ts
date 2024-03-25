import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-not-found-404',
  standalone: true,
  imports: [L10nTranslateAsyncPipe, RouterLink],
  templateUrl: './not-found-404.component.html',
  styleUrl: './not-found-404.component.scss'
})
export class NotFound404Component {

}
