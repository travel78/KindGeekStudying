import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceService } from '../common/resource.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  @ViewChild('f')
  private form: NgForm;

  constructor(private resourceService: ResourceService) {
  }

  public onAddItem() {
    const value = this.form.value;
    this.resourceService.createResource(value.title, value.url);
    this.form.reset();
  }
}
