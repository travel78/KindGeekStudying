import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import {AppRoutingModule} from './app-routing.module';
import { NewItemComponent } from './new-item/new-item.component';
import {ResourceService} from './common/resource.service';
import {InteractiveImgDirective} from './common/interactive-img.directive';
import { ResourcesItemComponent } from './resources/resources-item/resources-item.component';
import { EditItemComponent } from './resources/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    NewItemComponent,
    InteractiveImgDirective,
    ResourcesItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
