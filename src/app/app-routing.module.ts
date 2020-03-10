import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { VerComponent } from './componentes/ver/ver.component';
import { FinalComponent } from './componentes/final/final.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'ingresar', component: IngresarComponent },
    { path: 'ver', component: VerComponent },
    { path: 'final', component: FinalComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'despacho', component: DespachoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
