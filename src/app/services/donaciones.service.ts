import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import {Donaciones} from '../models/donaciones.model';
import { cargardonaciones } from '../interfaces/cargar-donaciones.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  public usuario: Usuario;
  public donaciones: Donaciones;
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
  cargarDonaciones() {       
    const url = `${ base_url }/donaciones`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, donaciones: Donaciones[] }) => resp.donaciones )
              );
  } 
  obtenerDonaciones( uid: string ) {
    const url = `${ base_url }/donaciones/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, donaciones: Donaciones[] }) => resp.donaciones )
              );
  }
  crearDonaciones( donaciones: { nombres: string, usuario: string } ) {
    const url = `${ base_url }/donaciones`;
    return this.http.post( url, donaciones, this.headers );
  }
  actualizarcitaDonaciones(uid: string ) {
    const url = `${ base_url }/donaciones/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarDonaciones( uid) {
    const url = `${ base_url }/donaciones/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarDonacionestotal( desde: number = 0 ) {
    const url = `${ base_url }/donaciones/total?desde=${ desde }`;
    return this.http.get<cargardonaciones>( url, this.headers )
            .pipe(
              map( resp => {
                const donaciones = resp.donaciones.map( 
                  user => new Donaciones(user.nombres, user.apellidos, user.tipodocumento,
                    user.numerodocumento, user.celular, user.email,
                    user.tipodonacion, user.cantidad, user.detalles )  
                );
                return {
                  total: resp.total,
                  donaciones
                };
              })
            )
  }


}
