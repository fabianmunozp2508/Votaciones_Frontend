import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import {DonacionesPublicas} from '../models/donacionespublicas.model';
import { cargardonacionespublicas } from '../interfaces/cargar-donacionespublicas.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class DonacionesPublicasService {
  public usuario: Usuario;
  public donaciones: DonacionesPublicas;
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
    const url = `${ base_url }/donacionesPublicas`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, donaciones: DonacionesPublicas[] }) => resp.donaciones )
              );
  } 
  obtenerDonaciones( uid: string ) {
    const url = `${ base_url }/donacionesPublicas/${ uid }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp: {ok: boolean, donaciones: DonacionesPublicas[] }) => resp.donaciones )
              );
  }
  crearDonaciones( donaciones: { nombres: string, usuario: string } ) {
    const url = `${ base_url }/donacionesPublicas`;
    return this.http.post( url, donaciones, this.headers );
  }
  actualizarcitaDonaciones(uid: string ) {
    const url = `${ base_url }/donacionesPublicas/${ uid }`;
    return this.http.put( url, { uid }, this.headers );
  }
 
  borrarDonaciones( uid) {
    const url = `${ base_url }/donacionesPublicas/${ uid }`;
    return this.http.delete( url, this.headers );
  }

  cargarDonacionestotal( desde: number = 0 ) {
    const url = `${ base_url }/donacionesPublicas/total?desde=${ desde }`;
    return this.http.get<cargardonacionespublicas>( url, this.headers )
            .pipe(
              map( resp => {
                const donaciones = resp.donaciones.map( 
                  user => new DonacionesPublicas(user.nombreentidad, user.representante, user.tipodocumento,
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
