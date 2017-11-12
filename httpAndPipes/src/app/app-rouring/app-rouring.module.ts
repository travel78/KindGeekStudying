import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { PostsComponent } from '../posts/posts.component';
import { CommentComponent } from '../posts/comment/comment.component';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentComponent },
  { path: 'form', component: FormComponent }
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
