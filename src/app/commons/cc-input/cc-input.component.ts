import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { L10nTranslateAsyncPipe } from 'angular-l10n';

@Component({
  selector: 'app-cc-input',
  standalone: true,
  imports: [L10nTranslateAsyncPipe, CommonModule, FormsModule],
  templateUrl: './cc-input.component.html',
  styleUrl: './cc-input.component.scss'
})
export class CcInputComponent {
  inputValue: string = '';
  @Input() maxLength: number = 100;
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Output() onInputChange = new EventEmitter<string>();
  @Input() require: boolean = false;
}
