import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import {Transporte} from '../models/transporte.model';
import { cargarTransporte } from '../interfaces/cargar-transporte.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  public usuario: Usuario;
  public votantes: Transporte;
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
  cargarTransporte() {       
    const url = `${ base_url }/transporte`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, transporte: Transporte[] }) => resp.transporte )
              );
  } 
  obtenerTransporte( uid: string ) {
    const url = `${ base_url }/transporte/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, transporte: Transporte[] }) => resp.transporte )
              );
  }
  crearTransporte( transporte: { nombres: string, usuario: string } ) {
    const url = `${ base_url }/transporte`;
    return this.http.post( url, transporte, this.headers );
  }
  actualizarcitaTransporte(uid: string ) {
    const url = `${ base_url }/transporte/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarTransporte( uid) {
    const url = `${ base_url }/transporte/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarTransportetotal( desde: number = 0 ) {
    const url = `${ base_url }/transporte/total?desde=${ desde }`;
    return this.http.get<cargarTransporte>( url, this.headers )
            .pipe(
              map( resp => {
                const transporte = resp.transporte.map( 
                  user => new Transporte(user.nombres, user.apellidos, user.tipodocumento,
                    user.numerodocumento, user.celular, user.email,
                    user.tipovehiculo, user.placa, user.cantidad,user.direccion
                    ,user.metodo,user.detalles )  
                );
                return {
                  total: resp.total,
                  transporte
                };
              })
            )
  }


}
