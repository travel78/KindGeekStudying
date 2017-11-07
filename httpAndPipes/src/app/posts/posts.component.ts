import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/http.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: { userId: number, id: number, title: string, body: string }[];
  public sortOrder;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      }
    );
  }
}
