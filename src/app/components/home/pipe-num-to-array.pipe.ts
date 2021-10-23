import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNumToArray',
})
export class PipeNumToArrayPipe implements PipeTransform {
  transform(value: number): Array<number> {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
