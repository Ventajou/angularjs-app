import { IRootElementService } from 'angular';
import { LayoutModule } from '~/layout/module';
import template from './header.component.html';
import styles from './header.component.pcss';

@LayoutModule
  .inject('$element')
  .component({ template })
export class Header {
  styles = styles;

  constructor(
    $element: IRootElementService
  ) {
    $element.addClass(styles.header);
  }
}
