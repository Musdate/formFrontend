import { Injectable } from '@angular/core';
import { Vino } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productos: Vino[] = [
    Vino.Anderra,
    Vino.Andes,
    Vino.Andes_GR,
    Vino.Andes_R,
    Vino.ER_Grande_R,
    Vino.ER_Icone,
    Vino.ER_Origine,
    Vino.ER_Reserve,
    Vino.Mapa,
    Vino.Mapa_R,
    Vino.Mapu,
    Vino.Mapu_GR,
    Vino.Mapu_R,
    Vino.ND_Andes,
    Vino.ND_Andes_GR,
    Vino.ND_Andes_PLTO,
    Vino.ND_Andes_R,
    Vino.Reserva,
    Vino.Reserva_E,
    Vino.Varietal_B
  ];

  constructor() { }

  get vinos(): Vino[] {
    return [ ...this._productos ]
  }

}
