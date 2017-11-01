import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class RestService {

  constructor(private http: Http) {
  }

  public getInfoFromUrl(url: string) {
    const fullPath = 'https://api.linkpreview.net/?key=59f3504ad9576287abb19da8aadbd118443e92685853e&q=' + url;
    return this.http.get(fullPath);
  }

}
