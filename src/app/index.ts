// App
export * from './app.component';
export * from './db';
export * from './services/app.service';

import { AppState } from './services';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  disableDeprecatedForms(),
  provideForms()
];

