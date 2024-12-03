import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para otras funcionalidades

@Component({
  selector: 'app-root',
  standalone: true, // Indica que es un componente standalone
  imports: [FormsModule, CommonModule], // Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'konecte_webapp';

  // Define la nueva propiedad
  newProperty = {
    title: '',
    price: 0,
    location: '',
    rooms: 0,
    description: ''
  };

  properties: any[] = []; // Lista de propiedades para el CRUD

  addProperty() {
    if (this.newProperty.title && this.newProperty.price && this.newProperty.location) {
      this.properties.push({ ...this.newProperty, id: Date.now() });
      this.newProperty = { title: '', price: 0, location: '', rooms: 0, description: '' };
    }
  }

  deleteProperty(propertyId: number) {
    this.properties = this.properties.filter(prop => prop.id !== propertyId);
  }
}
