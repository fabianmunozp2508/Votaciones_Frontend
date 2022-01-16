import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rendimiento } from 'src/app/models/rendimiento.model';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { RendimientoService } from 'src/app/services/rendimientos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-irendimiento-inversiones',
  templateUrl: './irendimiento-inversiones.component.html',
  styleUrls: ['./irendimiento-inversiones.component.css']
})
export class IRendimientoInversionesComponent implements OnInit {
  public rendimientosForm: FormGroup; 
  public usuario: Usuario;
  public totalRendimientos: number = 0;
  public desde: number = 0;
  public rendimientos: Rendimiento[] = []; 
  public RendimientosTemp: Rendimiento[] = []; 
  public cargando: boolean = true;
  public hayresultado: boolean = true;  
  constructor(private rendimientoservice: RendimientoService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService,) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {
    this.cargarRendimientos();
    this.cargarRendimiento();
    this.rendimientosForm = this.fb.group({
      nombredelainversion:['', Validators.required],        
      valorinvertido:['', Validators.required],
      fechainversion:['', Validators.required],
      valorganado:['', Validators.required],
      responsable:['', Validators.required],
      documento:['', Validators.required],
      telefono:['', Validators.required],
      email:['', Validators.required],
      detalles:['', Validators.required],
      codigo:['103', Validators.required],      
      recibe:[this.usuario.uid], 
    });
  }
  cargarRendimientos() {    
    this.rendimientoservice.cargarRendimientostotal( this.desde )
      .subscribe( ({ total, rendimiento }) => {
        this.totalRendimientos = total;
        this.rendimientos = rendimiento;
        this.RendimientosTemp = rendimiento;  
        console.log(total, rendimiento)            
    })
  }

  cargarRendimiento(){
    this.cargando = true;
    this.hayresultado=true;
      this.rendimientoservice.cargarRendimientos()   
      .subscribe( rendimiento => {        
        if (rendimiento.length==0){
          this.hayresultado=false;
        }
        this.cargando = false;
        this.rendimientos = rendimiento;
       
      });
    
   }

   GenerarRendimiento() {     
    this.rendimientoservice.crearRendimientos(this.rendimientosForm.value)
        .subscribe( (resp: any) => {
          Swal.fire('Creado', ` creado correctamente`, 'success');
          this.router.navigateByUrl(`/dashboard/RendimientoInversiones`)
      })
  
  }
}
