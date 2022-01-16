
import { DonacionesComite } from '../models/donacionescomite.model';

export interface cargardonaciones {
    total: number;
    donaciones: DonacionesComite[];
}