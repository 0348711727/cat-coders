import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { L10nTranslateAsyncPipe, L10nTranslationService } from 'angular-l10n';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { VoiceRecognitionService } from '../services/voice-recognition.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FooterComponent, CommonModule, MatIconModule, L10nTranslateAsyncPipe, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,
    private transaltionService: L10nTranslationService,
    private voiceService: VoiceRecognitionService) {
  }
  showInput: boolean = false;
  searchInput: string = '';
  modalRef?: BsModalRef;
  isMenuOpen: boolean = false;
  isActive: boolean = false;
  currentUrl: string = '';
  listNavbar: { [key: string]: string }[] = [
    { title: this.transaltionService.translate('HOME'), url: '' },
    { title: this.transaltionService.translate('ABOUT'), url: 'about' },
    { title: this.transaltionService.translate('SERVICES'), url: 'services' },
    { title: this.transaltionService.translate('EVENTS'), url: 'events' },
    { title: this.transaltionService.translate('MENU'), url: 'menu' },
    { title: this.transaltionService.translate('CONTACT'), url: 'contact' }
  ];
  triggerShowInput(data: boolean) {
    if (this.searchInput) return;
    this.showInput = data;
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url.slice(1);
    });
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  startRecord() {
    this.voiceService.start();
  }
  stopRecord() {
    this.voiceService.stop();
  }
  search() {
    if (!this.searchInput) return;
    console.log("search")
  }
  setvalue(event: KeyboardEvent) {
    this.searchInput = (event.target as HTMLTextAreaElement).value;
  }
}
