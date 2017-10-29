export class Resource{
  title: string;
  imgPath: string;
  description: string;
  url: string;
  like = false;


  constructor(title: string, imgPath: string, description: string, url: string) {
    this.title = title;
    this.imgPath = imgPath;
    this.description = description;
    this.url = url;
  }
}
