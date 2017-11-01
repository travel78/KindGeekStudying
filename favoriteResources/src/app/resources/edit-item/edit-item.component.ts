import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ResourceService } from '../../common/resource.service';
import { Resource } from '../../common/resource.module';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @ViewChild('f')
  private form: NgForm;
  private index: number;
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
      like: false
    };
    this.resourceService.updateResource(this.index, newRes);
    this.router.navigate(['/resources']);
  }

  public onCancel() {
    this.router.navigate(['/resources']);
  }
}
