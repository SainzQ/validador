import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValidarRFCComponent } from './components/validar-rfc/validar-rfc.component';
import { ValidarCURPComponent } from './components/validar-curp/validar-curp.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ValidarRFCComponent,
    ValidarCURPComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
