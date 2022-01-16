import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonacionesPublicas } from 'src/app/models/donacionespublicas.model';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { DonacionesPublicasService } from 'src/app/services/donacionespublicas.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idonaciones-privadas',
  templateUrl: './idonaciones-privadas.component.html',
  styleUrls: ['./idonaciones-privadas.component.css']
})
export class IDonacionesPrivadasComponent implements OnInit {
  public donacionespublicasForm: FormGroup; 
  public usuario: Usuario;
  public totalDonaciones: number = 0;
  public desde: number = 0;
  public donaciones: DonacionesPublicas[] = []; 
  public DonacionesTemp: DonacionesPublicas[] = []; 
  public cargando: boolean = true;
  public hayresultado: boolean = true;
  constructor(private donacionservices: DonacionesPublicasService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService,) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {
    this.cargarDonaciones();
    this.cargarDonacion();
    this.donacionespublicasForm = this.fb.group({
      nombreentidad:['', Validators.required],        
      representante:['', Validators.required],
      tipodocumento:['', Validators.required],
      numerodocumento:['', Validators.required],
      celular:['', Validators.required],
      email:['', Validators.required],
      tipodonacion:['', Validators.required],
      metodo:['101', Validators.required],  
      cantidad:['', Validators.required],
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
    this.donacionservices.crearDonaciones(this.donacionespublicasForm.value)
        .subscribe( (resp: any) => {
          Swal.fire('Creado', ` creado correctamente`, 'success');
          this.router.navigateByUrl(`/dashboard/IngresarDonacion`)
      })
  
  }
}
