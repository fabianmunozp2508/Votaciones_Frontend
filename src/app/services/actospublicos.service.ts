import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { cargaractospublicos } from '../interfaces/cargar-actospublicos.interface';
import { ActospUblicos } from '../models/actospublicos.model';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ActosPublicosService {
  public usuario: Usuario;
  public actospublicos: ActospUblicos;
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
  cargarActosPublicos() {       
    const url = `${ base_url }/actospublicos`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, actospublicos: ActospUblicos[] }) => resp.actospublicos )
              );
  } 
  obtenerActosPublicos( uid: string ) {
    const url = `${ base_url }/actospublicos/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, actospublicos: ActospUblicos[] }) => resp.actospublicos )
              );
  }
  crearActosPublicos( actospublicos: { nombres: string, usuario: string } ) {
    const url = `${ base_url }/actospublicos`;
    return this.http.post( url, actospublicos, this.headers );
  }
  actualizarcitaActosPublicos(uid: string ) {
    const url = `${ base_url }/actospublicos/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarActosPublicos( uid) {
    const url = `${ base_url }/actospublicos/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarActosPublicostotal( desde: number = 0 ) {
    const url = `${ base_url }/actospublicos/total?desde=${ desde }`;
    return this.http.get<cargaractospublicos>( url, this.headers )
            .pipe(
              map( resp => {
                const actospublicos = resp.actospublicos.map( 
                  user => new ActospUblicos(user.nombreevento, user.lugarvento, user.organizador,
                    user.numerodocumento, user.celular, user.email,
                    user.fechaevento, user.cantidad, user.detalles,user.codigo )  
                );
                return {
                  total: resp.total,
                  actospublicos
                };
              })
            )
  }


}
