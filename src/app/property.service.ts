import { Injectable } from '@angular/core';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  // Guardar propiedad
  saveProperty(property: Property) {
    let properties = JSON.parse(localStorage.getItem('properties') || '[]');
    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));
  }

  // Leer propiedades
  getProperties() {
    return JSON.parse(localStorage.getItem('properties') || '[]');
  }

  // Actualizar propiedad
  updateProperty(propertyId: string, updatedProperty: Property) {
    let properties = JSON.parse(localStorage.getItem('properties') || '[]');
    const index = properties.findIndex((prop: Property) => prop.id === propertyId);
    if (index !== -1) {
      properties[index] = updatedProperty;
      localStorage.setItem('properties', JSON.stringify(properties));
    }
  }

  // Eliminar propiedad
  deleteProperty(propertyId: string) {
    let properties = JSON.parse(localStorage.getItem('properties') || '[]');
    properties = properties.filter((prop: Property) => prop.id !== propertyId);
    localStorage.setItem('properties', JSON.stringify(properties));
  }
}
