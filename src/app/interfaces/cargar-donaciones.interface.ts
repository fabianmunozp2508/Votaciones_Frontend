
import { Donaciones } from '../models/donaciones.model';

export interface cargardonaciones {
    total: number;
    donaciones: Donaciones[];
}