import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import {Votantes} from '../models/votantes.model';
import { CargarVotantes } from '../interfaces/cargar-votantes.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class VotantesService {
  public usuario: Usuario;
  public votantes: Votantes;
  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }
  get role(): 'ADMIN_ROLE' | 'USER_ROLE' {
    return this.usuario.role;
  }
  get uid():string {
    return this.usuario.uid || '';
  }
  cargarVotantes() {       
    const url = `${ base_url }/votantes`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, votantes: Votantes[] }) => resp.votantes )
              );
  } 
  obtenerVotantes( uid: string ) {
    const url = `${ base_url }/votantes/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, votantes: Votantes[] }) => resp.votantes )
              );
  }
  crearVotantes( votantes: { nombres: string, usuario: string } ) {
    const url = `${ base_url }/votantes`;
    return this.http.post( url, votantes, this.headers );
  }
  actualizarcitaVotantes(uid: string ) {
    const url = `${ base_url }/votantes/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarVotantes( uid) {
    const url = `${ base_url }/votantes/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarVotantestotal( desde: number = 0 ) {
    const url = `${ base_url }/votantes/total?desde=${ desde }`;
    return this.http.get<CargarVotantes>( url, this.headers )
            .pipe(
              map( resp => {
                const votantes = resp.votantes.map( 
                  user => new Votantes(user.nombres, user.apellidos, '', user.tipodocumento,
                    user.numerodocumento, user.celular, user.email,
                    user.estado, user.ciudad, user.direccion )  
                );
                return {
                  total: resp.total,
                  votantes
                };
              })
            )
  }


}
