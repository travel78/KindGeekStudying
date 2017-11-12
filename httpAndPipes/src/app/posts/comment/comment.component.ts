import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../common/http.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public comments: { postId: number, id: number, name: string, email: string, body: string }[];

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.httpService.getPostComments(id).subscribe(
          (data) => {
            this.comments = data;
          }
        );
      }
    );
  }
}
