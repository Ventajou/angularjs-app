import { StateProvider } from '@uirouter/angularjs';
import { ILocationProvider } from 'angular';
import { App } from "~/app/module";
import * as Layout from '~/layout';

App.inject('$stateProvider', '$locationProvider').config((
  $stateProvider: StateProvider,
  $locationProvider: ILocationProvider
) => { 
  $locationProvider.html5Mode(true);
  $stateProvider
    .state({
      name: 'layout',
      url: '/',
      component: Layout.Components.Layout.$componentName
    });
});
