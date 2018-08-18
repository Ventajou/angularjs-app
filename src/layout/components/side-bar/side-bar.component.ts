import { IRootElementService } from 'angular';
import { LayoutModule } from '~/layout/module';
import template from './side-bar.component.html';
import styles from './side-bar.component.pcss';

@LayoutModule
  .inject('$element')
  .component({ template: template() })
export class SideBar {
  constructor(
    $element: IRootElementService
  ) {
    $element.addClass(styles.sideBar);
  }
}
