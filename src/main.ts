import { initFederation } from '@angular-architects/module-federation';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

initFederation('/assets/mf.manifest.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
