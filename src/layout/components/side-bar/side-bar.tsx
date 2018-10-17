import * as React from 'react';
import { LayoutModule } from '~/layout/module';
import styles from './side-bar.pcss';

@LayoutModule.reactComponent
export class SideBar extends React.Component {
  render() {
    return <div className={styles.sideBar}>
      <ul className={styles.list}>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  }
}
