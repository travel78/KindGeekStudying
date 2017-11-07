import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { PostsComponent } from '../posts/posts.component';
import { CommentComponent } from '../posts/comment/comment.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouringModule {
}
