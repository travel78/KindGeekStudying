import {Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ResourceService} from "../common/resource.service";
import {Resource} from "../common/resource.module";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']


})
export class ResourcesComponent implements OnInit, OnDestroy {
  resorces: Resource[];
  subscription = new Subscription();

  constructor(private resorceService: ResourceService) {
  }


  ngOnInit() {
    this.subscription = this.resorceService.changedResources.subscribe(
      (resources: Resource[]) => this.resorces = resources
    );
    this.resorces = this.resorceService.resources;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
