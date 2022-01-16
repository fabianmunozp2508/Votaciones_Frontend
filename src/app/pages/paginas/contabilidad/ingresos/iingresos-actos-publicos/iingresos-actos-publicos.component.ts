import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActospUblicos } from 'src/app/models/actospublicos.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ActosPublicosService } from 'src/app/services/actospublicos.service';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iingresos-actos-publicos',
  templateUrl: './iingresos-actos-publicos.component.html',
  styleUrls: ['./iingresos-actos-publicos.component.css']
})
export class IIngresosActosPublicosComponent implements OnInit {

  public ActosPublicosForm: FormGroup; 
  public usuario: Usuario;
  public totalActosPublicos: number = 0;
  public desde: number = 0;
  public actospublicos: ActospUblicos[] = []; 
  public ActospublicosTemp: ActospUblicos[] = []; 
  public cargando: boolean = true;
  public hayresultado: boolean = true;
  constructor(private actospublicosservice:ActosPublicosService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService,) { 
                this.usuario = usuarioService.usuario;
              }

              ngOnInit(): void {
                this.cargarActosPublicos();
                this.cargarActosPublico();
                this.ActosPublicosForm = this.fb.group({
                  nombreevento:['', Validators.required],        
                  lugarvento:['', Validators.required],
                  organizador:['', Validators.required],
                  numerodocumento:['', Validators.required],
                  celular:['', Validators.required],
                  email:['', Validators.required],
                  fechaevento:['', Validators.required],
                  cantidad:['', Validators.required],
                  codigo:['104'],
                  detalles:['', Validators.required],      
                  recibe:[this.usuario.uid], 
                });
            }
            
            cargarActosPublicos() {    
              this.actospublicosservice.cargarActosPublicostotal( this.desde )
                .subscribe( ({ total, actospublicos }) => {
                  this.totalActosPublicos = total;
                  this.actospublicos = actospublicos;
                  this.ActospublicosTemp = actospublicos; 
                  console.log(total, actospublicos)       
              })
            } 
            cargarActosPublico(){
              this.cargando = true;
              this.hayresultado=true;
                this.actospublicosservice.cargarActosPublicos()   
                .subscribe(actospublicos => {        
                  if (actospublicos.length==0){
                    this.hayresultado=false;
                  }
                  this.cargando = false;
                  this.actospublicos = actospublicos;
               
                });
              
             }
             GenerarActosPublicos() {     
              this.actospublicosservice.crearActosPublicos(this.ActosPublicosForm.value)
                  .subscribe( (resp: any) => {
                    Swal.fire('Creado', ` creado correctamente`, 'success');
                    this.router.navigateByUrl(`/dashboard/IngresosDonacionesPrivadas`)
                })
            
            }
             

}
