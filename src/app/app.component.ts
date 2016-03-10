import { Component, OnInit, Inject } from 'ng-metadata/core';
import { AppService } from './app.service';

@Component( {
  selector: `app`,
  template: require(`./app.component.html`)
} )
export class AppComponent implements OnInit {

  selected = null;
  users = [];
  data: any;
  social = this.appSvc.getSocialLinks();

  constructor(
    @Inject( '$mdSidenav' ) private $mdSidenav: ng.material.ISidenavService,
    @Inject( '$mdMedia' ) private $mdMedia: ng.material.IMedia,
    @Inject( AppService ) private appSvc: AppService
  ) {}

  ngOnInit() {
    this.appSvc.getData().then( ( response )=>this.data = response.data )
  }

  openShareEventWindow( href: string, $event: Event ) {

    $event.preventDefault();

    this.appSvc.createShareWindow( href );

  }

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleSidenav( anchor?: string ) {

    this.appSvc.navigateToAnchor(anchor);
    this.$mdSidenav( 'left' ).toggle();

  }

}
