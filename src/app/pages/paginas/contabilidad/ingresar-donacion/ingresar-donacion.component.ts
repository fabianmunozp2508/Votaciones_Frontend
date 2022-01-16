import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Donaciones } from 'src/app/models/donaciones.model';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { DonacionesService } from 'src/app/services/donaciones.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-donacion',
  templateUrl: './ingresar-donacion.component.html',
  styleUrls: ['./ingresar-donacion.component.css']
})
export class IngresarDonacionComponent implements OnInit {
  public donacionesForm: FormGroup; 
  public usuario: Usuario;
  public totalDonaciones: number = 0;
  public desde: number = 0;
  public donaciones: Donaciones[] = []; 
  public DonacionesTemp: Donaciones[] = []; 
  public cargando: boolean = true;
  public hayresultado: boolean = true;
  constructor(private donacionservices: DonacionesService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService,) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {
    this.cargarDonaciones();
    this.cargarDonacion();
    this.donacionesForm = this.fb.group({
      nombres:['', Validators.required],        
      apellidos:['', Validators.required],
      tipodocumento:['', Validators.required],
      numerodocumento:['', Validators.required],
      celular:['', Validators.required],
      email:['', Validators.required],
      tipodonacion:['', Validators.required],
      cantidad:['', Validators.required],
      metodo:['101', Validators.required],
      detalles:['', Validators.required],      
      recibe:[this.usuario.uid], 
    });
}

cargarDonaciones() {    
  this.donacionservices.cargarDonacionestotal( this.desde )
    .subscribe( ({ total, donaciones }) => {
      this.totalDonaciones = total;
      this.donaciones = donaciones;
      this.DonacionesTemp = donaciones; 
      console.log(total, donaciones)       
  })
} 
cargarDonacion(){
  this.cargando = true;
  this.hayresultado=true;
    this.donacionservices.cargarDonaciones()   
    .subscribe( donacion => {        
      if (donacion.length==0){
        this.hayresultado=false;
      }
      this.cargando = false;
      this.donaciones = donacion;
      console.log(donacion)
    });
  
 }
 GenerarDonacion() {     
  this.donacionservices.crearDonaciones(this.donacionesForm.value)
      .subscribe( (resp: any) => {
        Swal.fire('Creado', ` creado correctamente`, 'success');
        this.router.navigateByUrl(`/dashboard/IngresosDonacionesPrivadas`)
    })

}
 

}