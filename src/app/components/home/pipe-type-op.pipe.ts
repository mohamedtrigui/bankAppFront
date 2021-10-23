import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTypeOp',
})
export class PipeTypeOpPipe implements PipeTransform {
  transform(value: string): unknown {
    return value == 'V' ? 'Versement' : value == 'R' ? 'Retrait' : null;
  }
}
