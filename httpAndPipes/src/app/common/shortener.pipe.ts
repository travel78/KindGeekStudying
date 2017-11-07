import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, width: number): string {
    if (value.length >= width) {
      return value.substr(0, width) + '...';
    } else {
      return value.substr(0, width);
    }
  }
}
