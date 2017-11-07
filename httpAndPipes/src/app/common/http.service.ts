import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(
        (response: Response) => {
          const data: { userId: number, id: number, title: string, body: string }[] = response.json();
          return data;
        }
      );
  }

  public getPostComments(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments/?postId=' + id)
      .map(
        (response: Response) => {
          const data: { postId: number, id: number, name: string, email: string, body: string }[] = response.json();
          return data;
        }
      );
  }
}
