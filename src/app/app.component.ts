import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from './services/common.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _moment: any;
  periodos: Array<any>;
  screenWidth: number;
  dataLoaded = false as boolean;
  isFullYear: boolean;

  constructor(private commonService: CommonService) {
    this.getScreenSize();
    this._moment = moment;
    this.periodos = new Array<any>();
  }

  // Recogemos el tamaño de la pantalla por que queremos detectar el tamaño tablet (768px)
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this.commonService.getDatos().subscribe( data => this.periodos = this.crearEstructura(data) );
  }

  /*
   * Función que separa en bloques los meses de las cuotas. Por cada seis meses, crea una una posición en el array.
   * En la vista, cada bloque será representado con la cabecera correspondiente (al año) en caso de ser necesaria.
  */
  crearEstructura(periodificacion) {
    if (periodificacion) {
      // Variable de control para comprobar el salto de posición
      let pos = 0;
      let totalLinea = 0;
      const arrayPeriodos = [];

      // Cómo esta versión estamos recogiendo en el subtitulo un año, tendremos que extraer el año
      let anyo = this._moment(periodificacion[0].subtitulo, 'YYYYMM').format('YYYY');

      // Recogemos los años de los periodos y filtramos la cantidad total de ellos para contarlos
      // Si un año se encuentra 12 veces, sólo se mostrará la cabecera de un año.
      this.isFullYear = periodificacion.map( data => this._moment(data.subtitulo, 'YYYYMM').format('YYYY'))
          .filter(anio => anio === this._moment(periodificacion[0].subtitulo, 'YYYYMM').format('YYYY')).length === 12;

      // Generación del primer bloque
      arrayPeriodos[0] = [];

      for (const periodo of periodificacion) {
        if (totalLinea === 7) {
          totalLinea = 0;
        }

        const anyoAux = this._moment(periodo.subtitulo, 'YYYYMM').format('YYYY');
        // Comprobación para reiniciar variable
        if (arrayPeriodos[pos].length !== 6 && anyo === anyoAux && totalLinea !== 6) {
          arrayPeriodos[pos].push((periodo));
        } else {
          anyo = periodo.subtitulo.slice(0, 4); // Refresco de la fecha
          pos++; // Incremento del número de bloque
          arrayPeriodos[pos] = []; // Inicialización del siguiente bloque;
          arrayPeriodos[pos].push((periodo)); // Se inserta la cuota en la siguiente posición
        }

        totalLinea++;
      }

      // Transformamos la salida a un array de objetos
      const arraySalida = [];
      for (let i = 0; i < arrayPeriodos.length; i++) {
        arraySalida.push({
          totalPeriodos: arrayPeriodos[i].length,
          periodos: arrayPeriodos[i]
        });
      }

      return arraySalida;
    }
  }

}
