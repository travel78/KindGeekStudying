import {Component, HostListener, Input, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

import {Resource} from "../../common/resource.module";
import {ResourceService} from "../../common/resource.service";


@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css'],
  animations: [

    trigger('imgAnimate', [
      state('normal', style({
        transform: 'scale(1,1) translate(0px,0px) ',
        boxShadow: '0px 0px '

      })),
      state('bigSize', style({
        transform: 'scale(1.1,1.1) translate(-10px,-10px) ',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      })),
      state('move', style({
        transform: 'scale(1,1) translate(0px,0px) rotate(0deg) ',
        boxShadow: '0px 0px '
      })),
      transition('normal => bigSize', animate('0.35s linear')),
      transition('bigSize => normal', animate('0.15s ease-in')),
      transition('move => normal', animate(0)),
      transition('bigSize => move', animate('0.35s', keyframes([
          style({transform: 'rotate(10deg)', offset: 0}),
          style({transform: 'rotate(-10deg)', offset: 0.15}),
          style({transform: 'rotate(10deg)', offset: 0.30}),
          style({transform: 'rotate(-10deg)', offset: 0.45}),
          style({transform: 'rotate(10deg)', offset: 0.6}),
          style({transform: 'rotate(-10deg)', offset: 0.75}),
          style({transform: 'rotate(10deg)', offset: 1})
        ]))
      ),


    ])
  ]
})
export class ResourcesItemComponent implements OnInit {
  @Input() res: Resource;
  @Input() index: number;
  state = 'normal';
  private timer;

  constructor(private resourceService: ResourceService) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter',) onMouseOver() {
    this.state = 'bigSize';
    this.startTimer();
  }

  @HostListener('mouseleave') onMouseOut() {
    this.state = 'normal';
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onDelete() {
    this.resourceService.deleteResource(this.index);
  }



  onLike() {
    this.res.like = !this.res.like;
    this.resourceService.updateResource(this.index, this.res);
  }

  private startTimer() {
    this.timer = setTimeout(() => this.state = 'move', 5000);
  }

}
