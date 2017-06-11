import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tm-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() path: string;

  constructor() { }

  ngOnInit() { }
}
