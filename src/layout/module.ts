import Module from '~/decorators';
import { CoreModule } from '~/core/module';

export const LayoutModule = new Module('layout', [CoreModule.name]);
