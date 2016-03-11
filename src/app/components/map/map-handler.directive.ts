import { Directive, Inject, HostListener, SkipSelf, forwardRef } from 'ng-metadata/core';
import { MapComponent } from './map.component';


@Directive( {
  selector: '[np-map-handler]'
} )
export class MapHandlerDirective{

  constructor(
    @Inject( forwardRef( ()=>MapComponent ) ) @SkipSelf() private mapCmp: MapComponent
  ) {}

  @HostListener( 'mouseleave' )
  preventMapInteraction() {
    this.mapCmp.preventMapScroll()
  }

}
