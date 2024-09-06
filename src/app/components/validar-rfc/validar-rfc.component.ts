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

}
