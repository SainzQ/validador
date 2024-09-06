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

}
