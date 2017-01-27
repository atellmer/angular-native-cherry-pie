import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer
} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tm-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('textField') textFiledRef: ElementRef;
  public searchTerm: string = '';

  constructor(private renderer: Renderer) { }

  ngOnInit() { }

  handleBlurEmulate() {
    this.setFocusStyle();
  }

  handleSearchLayoutLoaded(ev) {
    if (ev.object.android) {
      ev.object.android.setFocusableInTouchMode(true);
    }
  }

  handleSearchBarLoaded(ev) {
    if (ev.object.android) {
      ev.object.android.clearFocus();
    }
  }

  handleEnterPress() {
    console.log('enter: ', this.searchTerm);
    this.resetTextField();
  }

  handleChange() {
    console.log('change: ', this.searchTerm);
  }

  handleClearButton() {
    this.resetTextField();
  }

  resetTextField() {
    this.searchTerm = '';
    if (this.textFiledRef.nativeElement.android) {
      this.textFiledRef.nativeElement.android.clearFocus();
    }
    this.setBlurStyle();
  }

  setFocusStyle() {
    this.renderer.setElementClass(this.container.nativeElement, 'blur', false);
    this.renderer.setElementClass(this.container.nativeElement, 'focus', true);
  }

  setBlurStyle() {
    this.renderer.setElementClass(this.container.nativeElement, 'focus', false);
    this.renderer.setElementClass(this.container.nativeElement, 'blur', true);
  }
}
