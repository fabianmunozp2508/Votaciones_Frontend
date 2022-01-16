import { Usuario } from './usuario.model';
export class ActospUblicos {
    constructor(
     public nombreevento?: string,
     public lugarvento?:string,
     public organizador?:string,
     public numerodocumento?:string,
     public celular?:string,
     public email?:string,  
     public fechaevento?:string,
     public cantidad?:string,
     public detalles?:string,  
     public codigo?:string,          
     public recibe?:Usuario []     
    ){
    }
}
