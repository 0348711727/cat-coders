import { Component } from '@angular/core';
import { CcDropdownComponent } from '@app/commons/cc-dropdown/cc-dropdown.component';
import { CcInputComponent } from '@app/commons/cc-input/cc-input.component';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [L10nTranslateAsyncPipe, CcInputComponent, CcDropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  routeMenuLv2: { title: string }[] = [{ title: 'b1' }, { title: 'b2' }, { title: 'b3' }];
  onChange(event: string | null) {
    console.log(event)
  }
  index: number = 0;
}
