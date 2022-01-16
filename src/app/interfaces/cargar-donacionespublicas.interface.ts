
import { DonacionesPublicas } from '../models/donacionespublicas.model';

export interface cargardonacionespublicas {
    total: number;
    donaciones: DonacionesPublicas[];
}