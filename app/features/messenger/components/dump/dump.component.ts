import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-dump',
  template: `<Label text="I am dump component"></Label>`,
})
export class DumpComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
