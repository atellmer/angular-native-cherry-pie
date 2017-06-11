// Core
import {
  Component,
  OnInit,
  Input
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-badge',
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() count: number;

  constructor() { }

  ngOnInit() { }
}
