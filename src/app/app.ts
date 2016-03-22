import '../../node_modules/angular-material/angular-material.scss'
import './app.scss';

import * as angular from 'angular';
// import * as ngAria from 'angular-aria';
// import * as ngMessages from 'angular-messages';
import * as ngSanitize from 'angular-sanitize';
import * as ngMaterial from 'angular-material';
import '../assets/svg-assets.js';
import { provide } from 'ng-metadata/core';


import { AppComponent } from './app.component.ts';
import { Configure } from './app.config';
import { AppService } from './app.service';
import { MapComponent } from './components/map/map.component';
import { MapHandlerDirective } from './components/map/map-handler.directive';
import { ProgramComponent } from './components/program/progam.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

const ngMaterialSvg = 'material.svgAssetsCache';
export const AppModule = angular.module( 'app', [
    ngSanitize,
    // ngAria,
    ngMaterial,
    ngMaterialSvg
  ] )
  .config( Configure )
  .service( ...provide( AppService ) )
  .directive( ...provide( AppComponent ) )
  .directive( ...provide( MapComponent ) )
  .directive( ...provide( MapHandlerDirective ) )
  .directive( ...provide( ProgramComponent ) )
  .directive( ...provide( SpeakersComponent ) )
  ;
