import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { Resource } from './resource.module';
import { RestService } from './rest.service';

@Injectable()
export class ResourceService {
  private _resources: Resource[] = [
    {
      title: 'Улюблена тваринка',
      imgPath: 'http://www.bugaga.ru/uploads/posts/2016-08/1471555196_subbota-25.jpg',
      description: `В Україні єнотом мисливці і зоологи називають єнота уссурійського (Nyctereutes procyonoides) — відомий мисливський
       вид хижих ссавців. Єноти в Україні тепер широко поширені і в окремих місцях є однією з домінантних груп хижих ссавців.`,
      url: 'http://www.bugaga.ru/',
      like: false
    },
    {
      title: 'Музика',
      imgPath: 'http://i2.ytimg.com/vi/IryFtcBJeZE/hqdefault.jpg',
      description: `Important: This is NOT meant to be a complete dark cabaret band/song list.
       If you feel I left someone out, check out my previous dark cabaret song collection...`,
      url: 'https://www.youtube.com/watch?v=IryFtcBJeZE',
      like: false
    },
    {
      title: 'Вело сайт',
      imgPath: 'http://www.x-bikers.ru/pic2/og_image.jpg',
      description: 'Partners workoutgearlab.net ',
      url: 'http://www.x-bikers.ru/board/',
      like: false
    },
    {
      title: 'Коли нема чим зайнятись',
      imgPath: '//s.4pda.to/JyyMIlyBNTTq8dUAr1FMhR2BRr3f.jpg',
      description: 'Important: This is NOT meant to be a complete dark cabaret band/song list.',
      url: 'https://4pda.ru/',
      like: false
    },
    {
      title: 'Улюблена тваринка',
      imgPath: 'http://www.bugaga.ru/uploads/posts/2016-08/1471555196_subbota-25.jpg',
      description: `В Україні єнотом мисливці і зоологи називають єнота уссурійського (Nyctereutes procyonoides) — відомий мисливський
       вид хижих ссавців. Єноти в Україні тепер широко поширені і в окремих місцях є однією з домінантних груп хижих ссавців.`,
      url: 'http://www.bugaga.ru/',
      like: false
    },
    {
      title: 'Музика',
      imgPath: 'http://i2.ytimg.com/vi/IryFtcBJeZE/hqdefault.jpg',
      description: `Important: This is NOT meant to be a complete dark cabaret band/song list.
      If you feel I left someone out, check out my previous dark cabaret song collection...`,
      url: 'https://www.youtube.com/watch?v=IryFtcBJeZE',
      like: false
    },
    {
      title: 'Вело сайт',
      imgPath: 'http://www.x-bikers.ru/pic2/og_image.jpg',
      description: 'Partners workoutgearlab.net ',
      url: 'http://www.x-bikers.ru/board/',
      like: false
    },
    {
      title: 'Коли нема чим зайнятись',
      imgPath: '//s.4pda.to/JyyMIlyBNTTq8dUAr1FMhR2BRr3f.jpg',
      description: 'Important: This is NOT meant to be a complete dark cabaret band/song list.',
      url: 'https://4pda.ru/',
      like: false
    }
  ];
  public changedResources = new Subject<Resource[]>();

  constructor(private router: Router, private restServise: RestService) {
  }

  get resources(): Resource[] {
    return this._resources.slice();
  }

  public addResource(newResource: Resource) {
    this._resources.push(newResource);
    this.changedResources.next(this.resources);
  }

  public deleteResource(index: number) {
    this._resources.splice(index, 1);
    this.changedResources.next(this.resources);
  }

  public updateResource(index: number, res: Resource) {
    this._resources[index] = res;
    this.changedResources.next(this.resources);
  }

  public getOneByIndex(index: number) {
    return this._resources[index];
  }

  public createResource(title: string, url: string) {
    this.restServise.getInfoFromUrl(url).subscribe(
      response => {
        const newResource: Resource = {
          title: title,
          imgPath: response.json().image,
          description: response.json().description,
          url: url,
          like: false
        };
        this.addResource(newResource);
        setTimeout(() => this.router.navigate(['/resources']), 500);
      },
      error => {
        console.log('something going wrong in getInfoFromUrl -' + error);
      }
    );
  }
}
