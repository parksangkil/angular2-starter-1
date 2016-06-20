// App
export * from './app.component';
export * from './db';
export * from './services/app.service';

import { AppState } from './services';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

