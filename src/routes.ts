import { StateProvider } from '@uirouter/angularjs';
import { ILocationProvider } from 'angular';
import { App } from "~/app";
import { Layout } from '~/layout/layout.component';

App.inject('$stateProvider', '$locationProvider').config((
  $stateProvider: StateProvider,
  $locationProvider: ILocationProvider
) => { 
  $locationProvider.html5Mode(true);
  $stateProvider
    .state({
      name: 'layout',
      url: '/',
      component: Layout.$componentName
    });
});
