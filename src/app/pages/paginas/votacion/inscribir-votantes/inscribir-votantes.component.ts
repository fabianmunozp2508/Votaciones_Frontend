import { Component, OnInit } from '@angular/core';
import { VotantesService } from 'src/app/services/votantes.service';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Votantes } from 'src/app/models/votantes.model';

@Component({
  selector: 'app-inscribir-votantes',
  templateUrl: './inscribir-votantes.component.html',
  styleUrls: ['./inscribir-votantes.component.css']
})
export class InscribirVotantesComponent implements OnInit {
  public cargando: boolean = true;
  public hayresultado: boolean = true;
  public desde: number = 0;
  public totalUsuarios: number = 0;
  public usuario: Usuario;
  public votantesForm: FormGroup; 
  public usuariosTemp: Votantes[] = [];  
  public votantes: Votantes[] = []; 
  public usuarios: Usuario[] = [];

  constructor(private votantesService: VotantesService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private busquedasService: BusquedasService) { 
                this.usuario = usuarioService.usuario;
              }

  ngOnInit(): void {  
    this.cargarResultados();  
    this.cargarResultados1()
    this.votantesForm = this.fb.group({
      nombres:['', Validators.required],        
      apellidos:['', Validators.required],
      tipodocumento:['', Validators.required],
      numerodocumento:['', Validators.required],
      celular:['', Validators.required],
      email:['', Validators.required],
      estado:['', Validators.required],
      ciudad:['', Validators.required],
      direccion:['', Validators.required],
      lugardevotacion:['', Validators.required],
      usuario:[this.usuario.uid],           
  });
  }
  cargarResultados1() {    
    this.votantesService.cargarVotantestotal( this.desde )
      .subscribe( ({ total, votantes }) => {
        this.totalUsuarios = total;
        this.votantes = votantes;
        this.usuariosTemp = votantes; 
        console.log(total, votantes)       
    })
  } 

  cargarResultados(){
    this.cargando = true;
    this.hayresultado=true;
      this.votantesService.cargarVotantes()   
      .subscribe(  votos => {        
        if (votos.length==0){
          this.hayresultado=false;
        }
        this.cargando = false;
        this.votantes = votos;
      });
    
   }
  cambiarPagina( valor: number ) {
    this.desde += valor;
    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalUsuarios ) {
      this.desde -= valor; 
    }

    this.cargarResultados1();
  }

  buscar( termino: string ) {
    if ( termino.length === 0 ) {
      return this.votantes = this.usuariosTemp;
    }
    this.busquedasService.buscar( 'usuarios', termino )
        .subscribe( (resp: Usuario[]) => {
          this.usuarios = resp;
        });
  }


  GenerarVotantes() {     
    this.votantesService.crearVotantes(this.votantesForm.value)
        .subscribe( (resp: any) => {
          Swal.fire('Creado', ` creado correctamente`, 'success');
          this.router.navigateByUrl(`/dashboard/InscribirVotantes`)
      })
  
}

}
