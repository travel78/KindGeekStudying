import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ResourceService } from '../../common/resource.service';
import { Resource } from '../../common/resource.module';
import { CanComponentDeactivate } from '../../common/edit-page-can-deactivate.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('f')
  private form: NgForm;
  private index: number;
  private canLeave = false;
  public resource: Resource;

  constructor(private route: ActivatedRoute, private resourceService: ResourceService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.resource = this.resourceService.getOneByIndex(this.index);
      }
    );
  }

  public onEditItem() {
    const value = this.form.value;
    const newRes: Resource = {
      title: value.title,
      imgPath: value.imgPath,
      description: value.description,
      url: value.url,
      like: true
    };
    this.resourceService.updateResource(this.index, newRes);
    this.canLeave = true;
    this.router.navigate(['/resources']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.canLeave) {
      return true;
    }
    if (this.form.dirty.valueOf()) {
      return confirm('Are you sure that you want to leave edit page? You have not stored data');
    }
    return true;
  }

  public onCancel() {
    this.router.navigate(['/resources']);
  }
}
