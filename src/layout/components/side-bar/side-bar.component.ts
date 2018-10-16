import { LayoutModule } from '~/layout/module';
import template from './side-bar.component.html';
import styles from './side-bar.component.pcss';

@LayoutModule
  .inject('$element')
  .component({ template: template() })
export class SideBar {

  abc = 'abc';
  def = 'def';

  constructor(
    $element: ng.IRootElementService
  ) {
    $element.addClass(styles.sideBar);
  }
}
