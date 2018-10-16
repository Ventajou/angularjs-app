import Module from '~/decorators';
import { LayoutModule } from '~/layout';

export const App = new Module('test', ['ui.router', LayoutModule.name]);
