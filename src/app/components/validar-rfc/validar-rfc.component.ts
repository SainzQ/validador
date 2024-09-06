import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-validar-rfc',
  templateUrl: './validar-rfc.component.html',
  styleUrls: ['./validar-rfc.component.css']
})
export class ValidarRFCComponent {
  rfc: string = '';
  @Input() curpValidado: string = '';

  constructor(private messageService: MessageService) { }

  onRfcChange(value: string) {
    this.rfc = value.toUpperCase().replace(/\s/g, '');
  }

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

  private compararRFCconCURP(): boolean {
    return this.rfc.substr(0, 10) === this.curpValidado.substr(0, 10);
  }

  validarRFC() {
    if (!this.curpValidado) {
      this.mostrarError('Por favor, valida primero el CURP.');
      return;
    }

    if (this.rfc.length !== 13) {
      this.mostrarError('El RFC debe tener exactamente 13 caracteres.');
      return;
    }

    if (!this.validarFormatoRFC(this.rfc)) {
      this.mostrarError('El formato del RFC no es válido.');
      return;
    }

    if (!this.compararRFCconCURP()) {
      this.mostrarError('Verifica que el RFC coincida con el CURP.');
      return;
    }

    this.mostrarExito('RFC válido y coincide con el CURP.');
  }

}
