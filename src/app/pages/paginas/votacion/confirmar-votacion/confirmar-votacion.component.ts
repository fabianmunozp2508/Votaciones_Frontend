import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Votantes } from 'src/app/models/votantes.model';
import { VotantesService } from 'src/app/services/votantes.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmar-votacion',
  templateUrl: './confirmar-votacion.component.html',
  styleUrls: ['./confirmar-votacion.component.css']
})
export class ConfirmarVotacionComponent implements OnInit {
  public votantesForm: FormGroup; 
  public votantes: Votantes[] = [];  
  public cargando: boolean = true;
  private imgSubs: Subscription;
  public desde: number = 0;
  public totalUsuarios: number = 0;
  public usuario: Usuario;
  public usuariosTemp: Votantes[] = [];
  public cantidadVotantes: boolean = true; 
    constructor( 
                 private fb: FormBuilder,
                 private votantesService: VotantesService,
                 private usuarioService: UsuarioService,
                 private modalImagenService: ModalImagenService,
                 private busquedasService: BusquedasService,
                ) {
                this.usuario = usuarioService.usuario;
 }

  ngOnInit(): void {
    this.cargarVotantes();
   
  }
  cargarVotantes() {  
    this.cargando = true; 
    this.cantidadVotantes = true;           
         this.votantesService.cargarVotantes()
        .subscribe( (votantes: Votantes[]) => {
        if (votantes.length==0){
          this.cantidadVotantes = false;  
        }    
        console.log(votantes) ;           
        this.cargando = false;     
        this.votantes = votantes;
               
      })   
  }
  borrarVotante(uid: string) {
    Swal.fire({
    title: '¿Borrar Historia?',
    text: `Esta a punto de borrar a ${ uid }`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, borrarlo'
  }).then((result) => {
    if (result.value) {      
      this.votantesService.borrarVotantes(uid )      
        .subscribe( resp => {            
          this.cargarVotantes();
          Swal.fire(
            'Votante  borrado',
            ` fue eliminado correctamente`,
            'success'
          ); 
        });
    }
  })
}

cargarVotantestotal() {
  this.cargando = true;
  this.votantesService.cargarVotantestotal( this.desde )
    .subscribe( ({ total, votantes }) => {
      console.log(votantes) ; 
      this.totalUsuarios = total;
      this.votantes = votantes;
      this.usuariosTemp = votantes;
      this.cargando = false;
  })
}

buscar( termino: string ) {
  if ( termino.length === 0 ) {
    return this.votantes = this.usuariosTemp;
  }

  this.busquedasService.buscarvotantes( 'votantes', termino )
      .subscribe( (resp: Votantes[]) => {
        this.votantes = resp;

      });
}

cambiarPagina( valor: number ) {
  this.desde += valor;
  if ( this.desde < 0 ) {
    this.desde = 0;
  } else if ( this.desde >= this.totalUsuarios ) {
    this.desde -= valor; 
  }
  this.cargarVotantes();
}
}
