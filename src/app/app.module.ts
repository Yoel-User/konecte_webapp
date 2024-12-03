import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Si tu componente es standalone, no es necesario agregarlo aquí
import { ContactComponent } from './contact/contact.component'; // Suponiendo que agregaste ContactComponent
import { FormsModule } from '@angular/forms'; // Necesario para usar ngModel
import { AppRoutingModule } from './app-routing.module'; // Importa el routing para la navegación

@NgModule({
  declarations: [

    ContactComponent,  // Aquí declaramos el componente de contacto
  ],
  imports: [
    BrowserModule,  // Asegúrate de tener BrowserModule para que funcione la app en el navegador
    FormsModule,    // Necesario para trabajar con ngModel
    AppRoutingModule, // Importa el módulo de rutas
  ],
  providers: [],
  
})
export class AppModule { }

