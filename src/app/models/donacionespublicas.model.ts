import { Usuario } from './usuario.model';
export class DonacionesPublicas {
    constructor(
     public nombreentidad?: string,
     public representante?:string,
     public tipodocumento?:string,
     public numerodocumento?:string,
     public celular?:string,
     public email?:string,  
     public tipodonacion?:string,
     public cantidad?:string,
     public detalles?:string,  
     public metodo?:string,           
     public recibe?:Usuario []     
    ){
    }
}
