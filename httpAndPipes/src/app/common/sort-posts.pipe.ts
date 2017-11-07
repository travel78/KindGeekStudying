import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPosts'
})
export class SortPostsPipe implements PipeTransform {

  transform(value: { userId: number, id: number, title: string, body: string }[], arg?: string): any[] {
    if (!arg) {
      return value;
    }
    return value.sort((a, b) => {
      if (a[arg] < b[arg]) {
        return -1;
      }
      if (a[arg] > b[arg]) {
        return 1;
      }
      return 0;
    });
  }
}
