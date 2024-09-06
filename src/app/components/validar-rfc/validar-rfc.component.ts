import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-validar-rfc',
  templateUrl: './validar-rfc.component.html',
  styleUrls: ['./validar-rfc.component.css']
})
export class ValidarRFCComponent {
  rfc: string = '';

  constructor(private messageService: MessageService) {}

  private mostrarError(mensaje: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: mensaje });
  }

  private mostrarExito(mensaje: string) {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: mensaje });
  }

  private validarFormatoRFC(rfc: string): boolean {
    const regex = /^[A-Z]{4}\d{6}[0-9A-Z]{3}$/;
    return regex.test(rfc);
  }

  validarRFC() {
    if (this.rfc.length !== 13) {
      this.mostrarError('El RFC debe tener exactamente 13 caracteres.');
      return;
    }

    if (!this.validarFormatoRFC(this.rfc)) {
      this.mostrarError('El formato del RFC no es válido.');
      return;
    }

    this.mostrarExito('RFC válido.');
  }

}
