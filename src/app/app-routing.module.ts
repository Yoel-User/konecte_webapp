import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Componente principal
import { ContactComponent } from './contact/contact.component';  // Componente de contacto

const routes: Routes = [
  { path: '', component: AppComponent },  // Ruta por defecto, usa AppComponent
  { path: 'contact', component: ContactComponent },  // Ruta para el formulario de contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
