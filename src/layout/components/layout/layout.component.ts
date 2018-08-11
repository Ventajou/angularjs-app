import styles from './layout.component.pcss';
import template from './layout.component.html';
import { LayoutModule } from '~/layout/module';
import { IRootElementService } from 'angular';

@LayoutModule
  .inject('$element')
  .component({
    template
  })
export class Layout {
  styles = styles;

  constructor(
    $element: IRootElementService
  ) {
    $element.addClass(styles.layout);
  }
}
