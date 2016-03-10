import { Injectable, Inject } from 'ng-metadata/core';

@Injectable()
export class AppService {

  constructor(
    @Inject( '$window' ) private $window: ng.IWindowService,
    @Inject( '$http' ) private $http: ng.IHttpService,
    @Inject( '$location' ) private $location: ng.ILocationService,
    @Inject( '$anchorScroll' ) private $anchorScroll: ng.IAnchorScrollService
  ){}

  private _siteUrl = this.$location.absUrl().replace( /#+.*/, '' );
  private _social = {
    twitter:{
      shareUrl: `https://twitter.com/intent/tweet?`,
      params: {
        text: `1st ever #Angular2 conference in #Prague Czech Republic. Grab your ticket while you can!`,
        hashtags: [ 'devsUnited' ].join( ',' ),
        url: this._siteUrl,
        via: `ngPartyCz`,
        baseUrl: 'https://twitter.com/intent/tweet'
      }
    },
    fb:{
      shareUrl: `https://www.facebook.com/sharer/sharer.php?`,
      params:{
        u: this._siteUrl
      }
    },
    google:{
      shareUrl: `https://plus.google.com/share?`,
      params: {
        url: this._siteUrl
      }
    }
  };

  getData(): ng.IPromise<any>{
    return this.$http.get( '/ngBigParty-II/assets/data.json' );
  }

  createShareWindow( href: string ) {
    this.$window.open(
      href,
      '',
      'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
    );
  }

  navigateToAnchor( anchor?: string ) {
    if ( angular.isString( anchor ) ) {
      this.$location.hash( anchor );
      // this.$anchorScroll(anchor);
    }
  }

  getSocialLinks(){
    return {
      twitter: this.createTwitterLink(),
      fb: this.createFbLink(),
      google: this.createGPlusLink()
    }
  }

  private createGPlusLink(){

    const params = this._social.google.params;
    const shareUrl = this._social.google.shareUrl;
    return this._buildShareLink(shareUrl,params,[]);

  }

  private createFbLink(){

    const params = this._social.fb.params;
    const shareUrl = this._social.fb.shareUrl;

    return this._buildShareLink(shareUrl,params,[
      // 'sdk=joey',
      'display=popup'
      // 'ref=plugin',
      // 'src=share_button'
    ]);

  }

  private createTwitterLink(){

    const params = this._social.twitter.params;
    const shareUrl = this._social.twitter.shareUrl;

    return this._buildShareLink(shareUrl,params,[]);

  }

  private _buildShareLink( baseUrl: string, params: Object, query = [] ): string {

    for(const qkey in params){
      query.push(`${qkey}=${encodeURIComponent(params[qkey])}`);
    }

    return (`${baseUrl}${query.join( '&' )}`);

  }
}
