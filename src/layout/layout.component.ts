import { App } from '~/app';
import styles from './layout.component.pcss';
import template from './layout.component.html';

@App.component({
  template
})
export class Layout {
  styles = styles;
}