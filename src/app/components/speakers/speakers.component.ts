import { Component, Input } from 'ng-metadata/core';
@Component({
  selector: 'np-speakers',
  template: require('./speakers.component.html')
})
export class SpeakersComponent{
  @Input() speakers: any[];
  @Input() title: string;
}
