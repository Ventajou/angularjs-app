import Module from '@rightscale/ui-angular-decorators';
import { LayoutModule } from '~/layout';

export const App = new Module('test', ['ui.router', LayoutModule.name]);
