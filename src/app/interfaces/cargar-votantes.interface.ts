
import { Votantes } from '../models/votantes.model';

export interface CargarVotantes {
    total: number;
    votantes: Votantes[];
}