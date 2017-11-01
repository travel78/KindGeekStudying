import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppRoutingModule } from './app-routing.module';
import { NewItemComponent } from './new-item/new-item.component';
import { ResourceService } from './common/resource.service';
import { ResourcesItemComponent } from './resources/resources-item/resources-item.component';
import { EditItemComponent } from './resources/edit-item/edit-item.component';
import { RestService } from './common/rest.service';
import { EditPageCanActivateService } from './common/edit-page-can-activate.service';
import { EditPageCanDeactivateService } from './common/edit-page-can-deactivate.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    NewItemComponent,
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
    ResourceService,
    RestService,
    EditPageCanActivateService,
    EditPageCanDeactivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
