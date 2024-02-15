import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideL10nIntl, provideL10nTranslation } from 'angular-l10n';
import { TranslationLoader, l10nConfig } from './l10n-config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideL10nTranslation(
      l10nConfig,
      {
        translationLoader: TranslationLoader
      }
    ),
    provideL10nIntl(), provideAnimationsAsync()]
};
