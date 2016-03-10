export class Configure {

  static $inject = [
    '$sceDelegateProvider',
    '$mdIconProvider',
    '$mdThemingProvider'
  ];

  constructor(
    $sceDelegateProvider: ng.ISCEDelegateProvider,
    $mdIconProvider: ng.material.IIconProvider,
    $mdThemingProvider: ng.material.IThemingProvider
  ) {

    $sceDelegateProvider.resourceUrlWhitelist( [
      'self',
      'https://www.google.com/maps/**'
    ] );

    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet( "./assets/svg/avatars.svg", 128 )
      .icon( "menu", "/assets/svg/menu.svg", 24 )
      .icon( "share", "./assets/svg/share.svg", 24 )
      .icon( "google_plus", "./assets/svg/google_plus.svg", 512 )
      .icon( "hangouts", "./assets/svg/hangouts.svg", 512 )
      .icon( "twitter", "./assets/svg/twitter.svg", 512 )
      .icon( "phone", "./assets/svg/phone.svg", 512 )
      .icon( "facebook", "img/icons/facebook.svg", 512 )
    ;

    $mdThemingProvider.definePalette('ngBigParty', {
      '50': 'ff00ff',
      '100': 'ff00ff',
      '200': 'ff00ff',
      '300': 'ff00ff',
      '400': 'ff00ff',
      '500': 'FF2645',
      '600': 'ff00ff',
      '700': 'ff00ff',
      '800': 'ff00ff',
      '900': 'ff00ff',
      'A100': 'ff00ff',
      'A200': '180555',
      'A400': 'ff00ff',
      'A700': 'ff00ff',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme( 'default' )
      .primaryPalette( 'ngBigParty' )
      .accentPalette( 'ngBigParty' )
    ;

  }
}
