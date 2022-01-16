import { Usuario } from './usuario.model';
export class Transporte {
    constructor(
     public nombres?: string,
     public apellidos?:string,
     public tipodocumento?:string,
     public numerodocumento?:string,
     public celular?:string,
     public email?:string,
     public tipovehiculo?:string,  
     public placa?:string,
     public cantidad?:string,
     public direccion?:string,  
     public metodo?:string,
     public detalles?:string,     
     public recibe?:Usuario []     
    ){
    }
}
