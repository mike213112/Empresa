import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { VerComponent } from './componentes/ver/ver.component';
import { FinalComponent } from './componentes/final/final.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    IngresarComponent,
    VerComponent,
    FinalComponent,
    InventarioComponent,
    DespachoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
