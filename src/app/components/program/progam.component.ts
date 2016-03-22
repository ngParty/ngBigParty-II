import { Component, Input } from 'ng-metadata/core';

@Component( {
  selector: 'np-program',
  template: require( './program.component.html' )
})
export class ProgramComponent {
  @Input() title: string;
  @Input() speakers: any[];
}
