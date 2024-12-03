import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  // Función que maneja el envío del formulario
  onSubmit() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      console.log('Enviando mensaje', this.contactData);
      alert('Mensaje enviado correctamente');
      
      // Resetea los campos después de enviar el mensaje
      this.contactData.name = '';
      this.contactData.email = '';
      this.contactData.message = '';
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
}
