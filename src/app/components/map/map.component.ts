import { Component, Input, HostListener, ViewChild, AfterViewInit } from 'ng-metadata/core';
import { MapHandlerDirective } from './map-handler.directive';

@Component( {
  selector: 'np-map',
  directives: [ MapHandlerDirective ],
  template: `
    <iframe
      np-map-handler
      flex flex-gt-sm="80"
      ng-src="{{ ::$ctrl.src }}"
      frameborder="0" style="border:0" height="400" allowfullscreen
    ></iframe>
    `
} )
export class MapComponent implements AfterViewInit{

  @Input() private src: string;
  @ViewChild( 'iframe' ) private _iFrameEl: ng.IAugmentedJQuery;

  private _className = 'scroll-off';

  @HostListener( 'mouseup' )
  preventMapScroll() {
    this._iFrameEl.addClass( this._className );
  }

  @HostListener( 'mousedown' )
  allowMapScroll() {
    this._iFrameEl.removeClass( this._className );
  }

  ngAfterViewInit() {
    this.preventMapScroll();
  }

}
