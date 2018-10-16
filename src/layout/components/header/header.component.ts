import { LayoutModule } from '~/layout/module';
import template from './header.component.html';
import styles from './header.component.pcss';

@LayoutModule
  .inject('$element')
  .component({ template: template(styles) })
export class Header {
  constructor(
    $element: ng.IRootElementService
  ) {
    $element.addClass(styles.header);
  }
}
