import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PipesModule } from '../pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
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
import { DegresosComponent } from './paginas/reportes/degresos/degresos.component';
import { DingresosComponent } from './paginas/reportes/dingresos/dingresos.component';
import { IAyudasEspeciasParticularComponent } from './paginas/contabilidad/ingresos/iayudas-especias-particular/iayudas-especias-particular.component';
import { IIngresosRecursosPropiosComponent } from './paginas/contabilidad/ingresos/iingresos-recursos-propios/iingresos-recursos-propios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UsuariosComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    BusquedaComponent,
    GastosAlimentacionComponent,
    GastosTransporteComponent,
    GastosVoluntariosComponent,
    IngresarDonacionComponent,
    ReportaranomaliaComponent,
    ReportarfraudeComponent,
    ReporteDonacionesComponent,
    VotacionesConfirmadasComponent,
    VotantesRegistradosComponent,
    ConfirmarVotacionComponent,
    ConsultarVotantesComponent,
    InscribirVotantesComponent,
    IngresosComponent,
    GastosComponent,
    IComitePromotorComponent,
    IDonacionesPrivadasComponent,
    IRendimientoInversionesComponent,
    IIngresosActosPublicosComponent,
    ICreditosComiteCampanaComponent,
    ICreditoDineroParticularesComponent,
    GAdministracionComponent,
    GOficinaAdquisicionesComponent,
    GMaterialesyPublicacionesComponent,
    GActosPublicosComponent,
    GCapacitacionInvestigacionComponent,
    GjudicailRendicionCuentasComponent,
    GPropagandaElectoralComponent,
    GCostosFinancierosComponent,
    GGastosFueraTopeComponent,
    GOtrosGastosComponent,
    DingresosComponent,
    DegresosComponent,
    IAyudasEspeciasParticularComponent,
    IIngresosRecursosPropiosComponent
    
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
