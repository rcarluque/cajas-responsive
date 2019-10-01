import { Injectable } from '@angular/core';
import { ObjetoPrueba } from '../models/common.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private objeto: Array<ObjetoPrueba> = [
    {
      titulo: 'Titol 1',
      subtitulo: '201901',
      precio: 200,
      iconos: [1, 2]
    },
    {
      titulo: 'Titol 2',
      subtitulo: '201901',
      precio: 100,
      iconos: [2]
    },
    {
      titulo: 'Titol 3',
      subtitulo: '202003',
      precio: 100,
      iconos: [3]
    },
    {
      titulo: 'Titol 4',
      subtitulo: '202004',
      precio: 100,
      iconos: [1, 4]
    },
    {
      titulo: 'Titol 5',
      subtitulo: '202005',
      precio: 100,
      iconos: [2, 3, 4]
    },
    {
      titulo: 'Titol 6',
      subtitulo: '202006',
      precio: 100,
      iconos: [2]
    },
    {
      titulo: 'Titol 7',
      subtitulo: '202007',
      precio: 100,
      iconos: [1, 2, 3, 4, 5]
    },
    {
      titulo: 'Titol 8',
      subtitulo: '202008',
      precio: 100,
      iconos: [1]
    },
    {
      titulo: 'Titol 9',
      subtitulo: '202009',
      precio: 100,
      iconos: [3, 4]
    },
    {
      titulo: 'Titol 10',
      subtitulo: '202010',
      precio: 100,
      iconos: [1, 3]
    },
    {
      titulo: 'Titol 11',
      subtitulo: '202012',
      precio: 100,
      iconos: [2]
    },
    {
      titulo: 'Titol 12',
      subtitulo: '202012',
      precio: 100,
      iconos: [4]
    },
  ];

  constructor() { }

  getDatos() {
    return of(this.objeto);
  }


}
