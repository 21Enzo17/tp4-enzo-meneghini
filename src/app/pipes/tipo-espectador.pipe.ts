import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEspectador',
  standalone: true
})
export class TipoEspectadorPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'l') {
      return 'Local';
    } else if (value === 'e') {
      return 'Extranjero';
    } else {
      return value;
    }
  }

}
