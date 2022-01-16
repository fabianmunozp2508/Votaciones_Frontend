import { Usuario } from './usuario.model';
export class Rendimiento {
    constructor(
     public nombredelainversion?: string,
     public valorinvertido?:string,
     public fechainversion?:string,
     public valorganado?:string,
     public responsable?:string,
     public documento?:string,  
     public telefono?:string,
     public email?:string,
     public detalles?:string, 
     public codigo?:string,          
     public recibe?:Usuario []     
    ){
    }
}
