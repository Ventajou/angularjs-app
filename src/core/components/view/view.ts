import { CoreModule } from '~/core/module';

const options = {
  template: '<ui-view></ui-view>'
};

@CoreModule.component(options)
export class View {}

export const getViewComponent = () => CoreModule.inject().toReact(options);
