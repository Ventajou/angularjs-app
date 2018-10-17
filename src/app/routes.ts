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
      name: 'splash',
      url: '/',
      template: '<a ui-sref="test">go</a>'
    })
    .state({
      name: 'layout',
      abstract: true,
      component: Layout.Components.Layout.$componentName
    })
    .state({
      name: 'test',
      parent: 'layout',
      url: '/foo',
      template: 'hello!'
    });
});
