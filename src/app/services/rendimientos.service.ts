import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import {Rendimiento} from '../models/rendimiento.model';
import { cargarrendiciones} from '../interfaces/rendimientos.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class RendimientoService {
  public usuario: Usuario;
  public donaciones: Rendimiento;
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
  cargarRendimientos() {       
    const url = `${ base_url }/rendimiento`;
    return this.http.get( url, this.headers )
              .pipe(
               map( (resp: {ok: boolean, rendimiento: Rendimiento[] }) => resp.rendimiento )
              );
  } 
  obtenerRendimientos( uid: string ) {
    const url = `${ base_url }/rendimiento/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
               map( (resp: {ok: boolean, rendimiento: Rendimiento[] }) => resp.rendimiento )
              );
  }
  crearRendimientos( rendimiento: { nombredelainversion: string, usuario: string } ) {
    const url = `${ base_url }/rendimiento`;
    return this.http.post( url, rendimiento, this.headers );
  }
  actualizarRendimientos(uid: string ) {
    const url = `${ base_url }/rendimiento/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarRendimientos( uid) {
    const url = `${ base_url }/rendimiento/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarRendimientostotal( desde: number = 0 ) {
    const url = `${ base_url }/rendimiento/total?desde=${ desde }`;
    return this.http.get<cargarrendiciones>( url, this.headers )
            .pipe(
              map( resp => {
                const rendimiento = resp.rendimiento.map( 
                  user => new Rendimiento(user.nombredelainversion, user.valorinvertido, user.fechainversion,
                    user.valorganado, user.responsable, user.documento,
                    user.telefono, user.email, user.detalles, user.codigo )  
                );
                return {
                  total: resp.total,
                  rendimiento
                };
              })
            )
  }


}
