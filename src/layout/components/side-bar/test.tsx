import * as React from 'react';
import { react2angular } from 'react2angular';
import { LayoutModule } from '~/layout/module';

interface Props {
  fooBar: string;
  baz: string;
}

class MyComponent extends React.Component<Props> {
  render() {
    return <div>
      <p>FooBar: {this.props.fooBar}</p>
      <p>Baz: {this.props.baz}</p>
    </div>
  }
}

LayoutModule.module.component('testComponent', react2angular(MyComponent, ['fooBar', 'baz']));
