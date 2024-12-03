import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa el AppComponent directamente

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
