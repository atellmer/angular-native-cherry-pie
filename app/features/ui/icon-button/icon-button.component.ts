import {
  Component,
  OnInit,
  Input
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-icon-button',
  templateUrl: 'icon-button.component.html',
  styleUrls: ['icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() { }
}
