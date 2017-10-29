import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ResourcesComponent} from "./resources/resources.component";
import {NewItemComponent} from "./new-item/new-item.component";
import {EditItemComponent} from "./resources/edit-item/edit-item.component";

const routes: Routes = [
  {path: '', redirectTo: '/resources', pathMatch: 'full'},
  {path: 'resources', component: ResourcesComponent},
  {path: 'resources/:id/edit', component: EditItemComponent},
  {path: 'newitem', component: NewItemComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
