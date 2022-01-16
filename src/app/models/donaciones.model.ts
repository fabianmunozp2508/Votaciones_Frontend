import { Usuario } from './usuario.model';
export class Donaciones {
    constructor(
     public nombres?: string,
     public apellidos?:string,
     public tipodocumento?:string,
     public numerodocumento?:string,
     public celular?:string,
     public email?:string,  
     public tipodonacion?:string,
     public cantidad?:string,
     public detalles?:string,           
     public recibe?:Usuario []     
    ){
    }
}
