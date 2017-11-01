import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ResourceService } from '../common/resource.service';
import { Resource } from '../common/resource.module';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit, OnDestroy {
  public resources: Resource[];
  private subscription = new Subscription();
  public screenSize = 3;

  constructor(private resorceService: ResourceService) {
  }

  ngOnInit() {
    this.subscription = this.resorceService.changedResources.subscribe(
      (resources: Resource[]) => this.resources = resources
    );
    this.resources = this.resorceService.resources;
  }

  @HostListener('window:resize')
  onResize() {
    if (innerWidth > 1200) {
      this.screenSize = 3;
    } else if (innerWidth < 1200 && innerWidth >= 640) {
      this.screenSize = 2;
    } else {
      this.screenSize = 1;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
