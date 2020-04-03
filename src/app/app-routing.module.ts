import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModbatComponent } from './modbat/modbat.component';
import { WrapComponent } from './wrap/wrap.component';
import { ModcorComponent } from './modcor/modcor.component';
import { ExportComponent } from './export/export.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: WrapComponent },
  { path: 'modbat', component: ModbatComponent },
  { path: 'modcor', component: ModcorComponent },
  { path: 'export', component: ExportComponent },
  { path: 'circuito', component: CircuitoComponent },
  { path: 'settings', component: SettingsComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
