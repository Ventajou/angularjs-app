import styles from './layout.component.pcss';
import template from './layout.component.html';
import { LayoutModule } from '~/layout/module';
import { IRootElementService } from 'angular';

@LayoutModule
  .inject('$element')
  .component({ template: template(styles) })
export class Layout {
  constructor(
    $element: IRootElementService
  ) {
    $element.addClass(styles.layout);
  }
}
