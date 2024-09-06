import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-validar-curp',
  templateUrl: './validar-curp.component.html',
  styleUrls: ['./validar-curp.component.css']
})
export class ValidarCURPComponent {
  curp: string = '';

  constructor(private messageService: MessageService) { }

  private mostrarError(mensaje: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: mensaje });
  }

  private mostrarExito(mensaje: string) {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: mensaje });
  }

  private validarFormatoCURP(curp: string): boolean {

    /*reglas del regEx, para Alonso y Miranda https://regexr.com/ pagina para testeo de regex
    [A-Z]{4}: Cuatro letras mayuculas seguidas.
    \d{6}: Seis numeros seguidos.
    [A-Z]: Una sola letra.
    [A-Z]{5}: Cinco letras mayusculas seguidas.
    [0-9A-Z]: Un solo carcter que puede ser numero o letra.
    \d: Un solo numero*/

    const regex = /^[A-Z]{4}\d{6}[A-Z][A-Z]{5}[0-9A-Z]\d$/;
    return regex.test(curp);
  }

  private validarSexoCURP(curp: string): boolean {
    return ['H', 'M'].includes(curp.charAt(10));
  }

  private validarEstadoCURP(curp: string): boolean {
    const estadosValidos = ['AS', 'BC', 'BS', 'CC', 'CL', 'CM', 'CS',
      'CH', 'DF', 'DG', 'GT', 'GR', 'HG', 'JC', 'MC', 'MN', 'MS', 'NT',
      'NL', 'OC', 'PL', 'QT', 'QR', 'SP', 'SL', 'SR', 'TC', 'TS', 'TL',
      'VZ', 'YN', 'ZS'];
    return estadosValidos.includes(curp.substr(11, 2));
  }

  private validarFechaCURP(curp: string): boolean {
    const fecha = curp.substr(4, 6);
    const año = parseInt(fecha.substr(0, 2));
    const mes = parseInt(fecha.substr(2, 2));
    const dia = parseInt(fecha.substr(4, 2));

    if (mes < 1 || mes > 12) return false;
    if (dia < 1 || dia > 31) return false;

    
    return true;
  }

  private calcularEdad(curp: string): number {
    const fechaNacimiento = new Date();
    fechaNacimiento.setFullYear(parseInt('19' + curp.substr(4, 2)));
    fechaNacimiento.setMonth(parseInt(curp.substr(6, 2)) - 1);
    fechaNacimiento.setDate(parseInt(curp.substr(8, 2)));

    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  validarCURP() {
    if (this.curp.length !== 18) {
      this.mostrarError('La CURP debe tener exactamente 18 caracteres.');
      return;
    }

    if (!this.validarFormatoCURP(this.curp)) {
      this.mostrarError('El formato de la CURP no es válido.');
      return;
    }

    if (!this.validarSexoCURP(this.curp)) {
      this.mostrarError('El identificador de sexo en la CURP no es válido.');
      return;
    }

    if (!this.validarEstadoCURP(this.curp)) {
      this.mostrarError('El identificador de estado en la CURP no es válido.');
      return;
    }

    if (!this.validarFechaCURP(this.curp)) {
      this.mostrarError('La fecha en la CURP no es válida.');
      return;
    }

    const edad = this.calcularEdad(this.curp);
    this.mostrarExito(`CURP válida. Edad calculada: ${edad} años.`);
  }

  

  
}
