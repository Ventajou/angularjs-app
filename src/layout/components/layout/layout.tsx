import * as React from 'react';
import { LayoutModule } from '~/layout/module';
import styles from './layout.pcss';
import { SideBar } from '../side-bar/side-bar';
import { getViewComponent } from '~/core/components/view/view';

@LayoutModule.reactComponent
export class Layout extends React.Component {
  render() {
    let View = getViewComponent();
    return <div className={styles.main}>
      <SideBar></SideBar>
      <div className={styles.content}>
        <View></View>
      </div>
    </div>
  }
}
