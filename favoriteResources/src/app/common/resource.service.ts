import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Resource} from "./resource.module";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Injectable()
export class ResourceService {
  private _resources = [
    new Resource('Улюблена тваринка', 'http://www.bugaga.ru/uploads/posts/2016-08/1471555196_subbota-25.jpg', 'В Україні єнотом мисливці і зоологи називають єнота уссурійського (Nyctereutes procyonoides) — відомий мисливський вид хижих ссавців. Єноти в Україні тепер широко поширені і в окремих місцях є однією з домінантних груп хижих ссавців.', 'http://www.bugaga.ru/'),
    new Resource('Музика', 'http://i2.ytimg.com/vi/IryFtcBJeZE/hqdefault.jpg', 'Important: This is NOT meant to be a complete dark cabaret band/song list. If you feel I left someone out, check out my previous dark cabaret song collection...', 'https://www.youtube.com/watch?v=IryFtcBJeZE'),
    new Resource('Вело сайт', 'http://www.x-bikers.ru/pic2/og_image.jpg', 'Partners workoutgearlab.net ', 'http://www.x-bikers.ru/board/'),
    new Resource('Коли нема чим зайнятись', '//s.4pda.to/JyyMIlyBNTTq8dUAr1FMhR2BRr3f.jpg', 'Important: This is NOT meant to be a complete dark cabaret band/song list.', 'https://4pda.ru/'),
    new Resource('Улюблена тваринка', 'http://www.bugaga.ru/uploads/posts/2016-08/1471555196_subbota-25.jpg', 'В Україні єнотом мисливці і зоологи називають єнота уссурійського (Nyctereutes procyonoides) — відомий мисливський вид хижих ссавців. Єноти в Україні тепер широко поширені і в окремих місцях є однією з домінантних груп хижих ссавців.', 'http://www.bugaga.ru/'),
    new Resource('Музика', 'http://i2.ytimg.com/vi/IryFtcBJeZE/hqdefault.jpg', 'Important: This is NOT meant to be a complete dark cabaret band/song list. If you feel I left someone out, check out my previous dark cabaret song collection...', 'https://www.youtube.com/watch?v=IryFtcBJeZE'),
    new Resource('Вело сайт', 'http://www.x-bikers.ru/pic2/og_image.jpg', 'Partners workoutgearlab.net ', 'http://www.x-bikers.ru/board/'),
    new Resource('Коли нема чим заянятись', '//s.4pda.to/JyyMIlyBNTTq8dUAr1FMhR2BRr3f.jpg', 'Important: This is NOT meant to be a complete dark cabaret band/song list.', 'https://4pda.ru/')
  ];
  changedResources = new Subject<Resource[]>();

  constructor(private http: Http, private router: Router) {
  }


  get resources(): Resource[] {
    return this._resources.slice();
  }

  createResource(title: string, url: string) {
    const fullPath = 'http://api.linkpreview.net/?key=59f3504ad9576287abb19da8aadbd118443e92685853e&q=' + url;
    // const fullPath = 'http://api.screenshotmachine.com/?key=12345&url=' + url;
    this.http.get(fullPath).subscribe(
      response => {
        const newResource = new Resource(title, response.json().image, response.json().description, url);
        this.addIfCreated(newResource);
        setTimeout(() => this.router.navigate(['/resources']), 1000);
      },
      error => {
        console.log('something going wrong in getInfoFromUrl');
      }
    );

  }

  private addIfCreated(newResource: Resource) {
    this._resources.push(newResource);
    this.changedResources.next(this.resources);
  }

  deleteResource(index: number) {
    this._resources.splice(index, 1);
    this.changedResources.next(this.resources);
  }

  updateResource(index: number, res: Resource) {
    this._resources[index] = res;
    this.changedResources.next(this.resources);
  }
  getOneByIndex(index:number){
    return this._resources[index];
  }
}
