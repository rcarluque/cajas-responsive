import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'transformDate'
})
export class TransformDatePipe implements PipeTransform {
  private _moment: any;
  private format: string;

  constructor() {
    this._moment = moment;
    this._moment.locale('ES');
  }

  transform(value: any, dateFormat?: string, toFormat?: string): any {
    this.format = toFormat ? toFormat : 'LLLL';
    return this._moment(value, dateFormat).format(this.format);
  }

}
