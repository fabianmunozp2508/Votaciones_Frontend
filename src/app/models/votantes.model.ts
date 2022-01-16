import { Usuario } from '../models/usuario.model';
export class Votantes {
    constructor(
     public nombres?: string,
     public apellidos?:string,
     public tipodocumento?:string,
     public numerodocumento?:string,
     public celular?:string,
     public email?:string,  
     public estado?:string,
     public ciudad?:string,
     public direccion?:string,  
     public lugardevotacion?:string,
     public voto?:string,     
     public usuario?:Usuario []     
    ){
    }
}
