import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-cc-dropdown',
  standalone: true,
  imports: [CommonModule, L10nTranslateAsyncPipe],
  templateUrl: './cc-dropdown.component.html',
  styleUrl: './cc-dropdown.component.scss'
})
export class CcDropdownComponent {
  @Input() isDisabled: boolean = false;
  @Input() listDropdown: { label: string, value: string | null }[] = [{ label: 'Select', value: "null" }];
  @Output() onSelectDropdown = new EventEmitter<string | null>();
}
