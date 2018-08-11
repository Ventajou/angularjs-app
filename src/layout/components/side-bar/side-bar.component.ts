import { IRootElementService } from 'angular';
import { LayoutModule } from '~/layout/module';
import template from './side-bar.component.html';
import styles from './side-bar.component.pcss';

@LayoutModule
  .inject('$element')
  .component({ template })
export class SideBar {
  styles = styles;

  constructor(
    $element: IRootElementService
  ) {
    $element.addClass(styles.sideBar);
  }
}
