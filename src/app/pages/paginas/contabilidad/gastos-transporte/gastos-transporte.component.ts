import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { TransporteService } from 'src/app/services/transporte.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Transporte } from 'src/app/models/transporte.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gastos-transporte',
  templateUrl: './gastos-transporte.component.html',
  styleUrls: ['./gastos-transporte.component.css']
})
export class GastosTransporteComponent implements OnInit {
  public transporteForm: FormGroup; 
  public usuario: Usuario;
  public totalTransporte: number = 0;
  public desde: number = 0;
  public donaciones: Transporte[] = []; 
  public TransporteTemp: Transporte[] = []; 
  public cargando: boolean = true;
  public hayresultado: boolean = true;
  constructor(private transporteservices: TransporteService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService,) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {
    this.cargartransporte();
    this.cargarTransporte();
    this.transporteForm = this.fb.group({
      nombres:['', Validators.required],        
      apellidos:['', Validators.required],
      tipodocumento:['', Validators.required],
      numerodocumento:['', Validators.required],
      celular:['', Validators.required],
      email:['', Validators.required],
      tipovehiculo:['', Validators.required],
      placa:['', Validators.required],
      cantidad:['', Validators.required],
      direccion:['', Validators.required],      
      metodo:['', Validators.required],
      detalles:['', Validators.required],      
      recibe:[this.usuario.uid], 
    });
  }
  cargartransporte() {    
    this.transporteservices.cargarTransportetotal( this.desde )
      .subscribe( ({ total, transporte }) => {
        this.totalTransporte = total;
        this.donaciones = transporte;
        this.TransporteTemp = transporte;
    })
  } 

  cargarTransporte(){
    this.cargando = true;
    this.hayresultado=true;
      this.transporteservices.cargarTransporte()   
      .subscribe( donacion => {        
        if (donacion.length==0){
          this.hayresultado=false;
        }
        this.cargando = false;
        this.donaciones = donacion;       
      });    
   }

   GenerarTransporte() {     
    this.transporteservices.crearTransporte(this.transporteForm.value)
        .subscribe( (resp: any) => {
          Swal.fire('Creado', ` creado correctamente`, 'success');
          this.router.navigateByUrl(`/dashboard/GastosTransporte`)
      })
  
  }

}
