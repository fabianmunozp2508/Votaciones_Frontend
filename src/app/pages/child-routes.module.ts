import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';

// Votaciones
import { GastosAlimentacionComponent } from './paginas/contabilidad/gastos-alimentacion/gastos-alimentacion.component';
import { GastosTransporteComponent } from './paginas/contabilidad/gastos-transporte/gastos-transporte.component';
import { GastosVoluntariosComponent } from './paginas/contabilidad/gastos-voluntarios/gastos-voluntarios.component';
import { IngresarDonacionComponent } from './paginas/contabilidad/ingresar-donacion/ingresar-donacion.component';
import { ReportaranomaliaComponent } from './paginas/irregularidades/reportaranomalia/reportaranomalia.component';
import { ReportarfraudeComponent } from './paginas/irregularidades/reportarfraude/reportarfraude.component';
import { ReporteDonacionesComponent } from './paginas/reportes/reporte-donaciones/reporte-donaciones.component';
import { VotacionesConfirmadasComponent } from './paginas/reportes/votaciones-confirmadas/votaciones-confirmadas.component';
import { VotantesRegistradosComponent } from './paginas/reportes/votantes-registrados/votantes-registrados.component';
import { ConfirmarVotacionComponent } from './paginas/votacion/confirmar-votacion/confirmar-votacion.component';
import { ConsultarVotantesComponent } from './paginas/votacion/consultar-votantes/consultar-votantes.component';
import { InscribirVotantesComponent } from './paginas/votacion/inscribir-votantes/inscribir-votantes.component';
import { IngresosComponent } from './paginas/contabilidad/ingresos/ingresos.component';
import { GastosComponent } from './paginas/contabilidad/gastos/gastos.component';
import { IComitePromotorComponent } from './paginas/contabilidad/ingresos/icomite-promotor/icomite-promotor.component';
import { IDonacionesPrivadasComponent } from './paginas/contabilidad/ingresos/idonaciones-privadas/idonaciones-privadas.component';
import { IRendimientoInversionesComponent } from './paginas/contabilidad/ingresos/irendimiento-inversiones/irendimiento-inversiones.component';
import { IIngresosActosPublicosComponent } from './paginas/contabilidad/ingresos/iingresos-actos-publicos/iingresos-actos-publicos.component';
import { ICreditosComiteCampanaComponent } from './paginas/contabilidad/ingresos/icreditos-comite-campana/icreditos-comite-campana.component';
import { ICreditoDineroParticularesComponent } from './paginas/contabilidad/ingresos/icredito-dinero-particulares/icredito-dinero-particulares.component';
import { GAdministracionComponent } from './paginas/contabilidad/gastos/gadministracion/gadministracion.component';
import { GOficinaAdquisicionesComponent } from './paginas/contabilidad/gastos/goficina-adquisiciones/goficina-adquisiciones.component';
import { GMaterialesyPublicacionesComponent } from './paginas/contabilidad/gastos/gmaterialesy-publicaciones/gmaterialesy-publicaciones.component';
import { GActosPublicosComponent } from './paginas/contabilidad/gastos/gactos-publicos/gactos-publicos.component';
import { GCapacitacionInvestigacionComponent } from './paginas/contabilidad/gastos/gcapacitacion-investigacion/gcapacitacion-investigacion.component';
import { GjudicailRendicionCuentasComponent } from './paginas/contabilidad/gastos/gjudicail-rendicion-cuentas/gjudicail-rendicion-cuentas.component';
import { GPropagandaElectoralComponent } from './paginas/contabilidad/gastos/gpropaganda-electoral/gpropaganda-electoral.component';
import { GCostosFinancierosComponent } from './paginas/contabilidad/gastos/gcostos-financieros/gcostos-financieros.component';
import { GGastosFueraTopeComponent } from './paginas/contabilidad/gastos/ggastos-fuera-tope/ggastos-fuera-tope.component';
import { GOtrosGastosComponent } from './paginas/contabilidad/gastos/gotros-gastos/gotros-gastos.component';
import { DingresosComponent } from './paginas/reportes/dingresos/dingresos.component';
import { DegresosComponent } from './paginas/reportes/degresos/degresos.component';
import { IAyudasEspeciasParticularComponent } from './paginas/contabilidad/ingresos/iayudas-especias-particular/iayudas-especias-particular.component';
import { IIngresosRecursosPropiosComponent } from './paginas/contabilidad/ingresos/iingresos-recursos-propios/iingresos-recursos-propios.component';



const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas' }},
  { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
  { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
  { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},

  // Mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Matenimiento de Hospitales' }},
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Matenimiento de Medicos' }},
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Matenimiento de Medicos' }},
  
  // rutas Votaciones IngresosComponent
  { path: 'GastosAlimentacion', component: GastosAlimentacionComponent, data: { titulo: 'Gastos Alimentación' }},
  
  { path: 'GastosVoluntarios', component: GastosVoluntariosComponent, data: { titulo: 'Gastos Voluntarios' }},
  { path: 'IngresosDonacionesPrivadas', component: IngresarDonacionComponent, data: { titulo: 'Ingresar Codigo 102' }},
  { path: 'Reportaranomalia', component: ReportaranomaliaComponent, data: { titulo: 'Reportar Anomalia' }},
  { path: 'Reportarfraude', component: ReportarfraudeComponent, data: { titulo: 'Reportar Fraude' }},
  { path: 'ReporteDonaciones', component: ReporteDonacionesComponent, data: { titulo: 'ReporteDonaciones' }},
  { path: 'VotacionesConfirmadas', component: VotacionesConfirmadasComponent, data: { titulo: 'Votaciones Confirmadas' }},
  { path: 'VotantesRegistrados', component: VotantesRegistradosComponent, data: { titulo: 'Votantes Registrados' }},
  { path: 'ConfirmarVotacion', component: ConfirmarVotacionComponent, data: { titulo: 'Lista de  Votantes' }},
  { path: 'ConsultarVotantes', component: ConsultarVotantesComponent, data: { titulo: 'Consultar Votantes' }},
  { path: 'InscribirVotantes', component: InscribirVotantesComponent, data: { titulo: 'Inscribir Votantes' }},
  // Contabilidad GastosComponent 

  { path: 'IngresarGastos', component: GastosComponent, data: { titulo: 'Ingresar Gastos' }},

  //Reportes 
  { path: 'ReportesIngresos', component: DingresosComponent, data: { titulo: 'Reportes de Ingresos' }},
  { path: 'ReportesEgresos', component: DegresosComponent, data: { titulo: 'Reportes de Egresos ' }},

  // Gastos ,
    
  { path: 'OtrosGastos', component: GOtrosGastosComponent, data: { titulo: 'Gasto Codigo 211' }},
  { path: 'SobrePasoSumaFija', component: GGastosFueraTopeComponent, data: { titulo: 'Gasto Codigo 210' }},
  { path: 'CostosFinancieros', component: GCostosFinancierosComponent, data: { titulo: 'Gasto Codigo 209' }},
  { path: 'PropagandaElectoral', component: GPropagandaElectoralComponent, data: { titulo: 'Gasto Codigo 208' }},
  { path: 'judicailRendicionCuentas', component: GjudicailRendicionCuentasComponent, data: { titulo: 'Gasto Codigo 207' }},
  { path: 'CapacitacionInvestigacion', component: GCapacitacionInvestigacionComponent, data: { titulo: 'Gasto Codigo 206' }},
  { path: 'GastosTransporte', component: GastosTransporteComponent, data: { titulo: 'Gasto Codigo 205' }},
  { path: 'ActosPublicos', component: GActosPublicosComponent, data: { titulo: 'Gastos codigo 204' }},
  { path: 'MaterialesyPublicaciones', component: GMaterialesyPublicacionesComponent, data: { titulo: 'Gastos codigo 203' }},
  { path: 'GastosOficinaAdquisiciones', component: GOficinaAdquisicionesComponent, data: { titulo: 'Gastos codigo 202' }}, 
  { path: 'GastosAdministracion', component: GAdministracionComponent, data: { titulo: 'Gastos codigo 201' }}, 
  // ingresos Contabilidad 

  { path: 'IngresosRecursosPropios', component: IIngresosRecursosPropiosComponent, data: { titulo: 'Ingreso codigo 108' }},
  { path: 'AyudasEspeciasParticular', component: IAyudasEspeciasParticularComponent, data: { titulo: 'Ingreso codigo 107' }}, 
  { path: 'CreditoDineroParticulares', component: ICreditoDineroParticularesComponent, data: { titulo: 'Ingreso Codigo 106' }},
  { path: 'IngresosCreditosComiteCampana', component: ICreditosComiteCampanaComponent, data: { titulo: 'Ingreso Codigo 105' }},
  { path: 'IngresosActosPublicos', component: IIngresosActosPublicosComponent, data: { titulo: 'Ingreso Codigo 104' }},
  { path: 'RendimientoInversiones', component: IRendimientoInversionesComponent, data: { titulo: 'Ingreso Codigo 103' }},
  { path: 'IngresosCampana', component: IngresosComponent, data: { titulo: 'Ingreso Campañas' }},
  { path: 'IngresosComitePromotor', component: IComitePromotorComponent, data: { titulo: 'Ingreso Codigo 100' }},
  { path: 'IngresarDonacion', component: IDonacionesPrivadasComponent, data: { titulo: 'Ingreso Codigo 101' }},
  // Rutas de Admin
  { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
