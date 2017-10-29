import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

import {ResourceService} from "../../common/resource.service";
import {Resource} from "../../common/resource.module";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  index: number;
  resource: Resource;

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

  onEditItem() {
    const value = this.form.value;
    const newRes = new Resource(value.title, value.imgPath, value.description, value.url);
    this.resourceService.updateResource(this.index, newRes);
    this.router.navigate(['/resources']);
  }

  onCancel() {
    this.router.navigate(['/resources']);
  }
}
