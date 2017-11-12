import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRouringModule } from './app-rouring/app-rouring.module';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './common/dropdown.directive';
import { PostsComponent } from './posts/posts.component';
import { HttpService } from './common/http.service';
import { CommentComponent } from './posts/comment/comment.component';
import { ShortenerPipe } from './common/shortener.pipe';
import { SortPostsPipe } from './common/sort-posts.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    DropdownDirective,
    PostsComponent,
    CommentComponent,
    ShortenerPipe,
    SortPostsPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouringModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
