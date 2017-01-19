import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Switch } from 'antd';

@observer
class App extends Component {
  @observable disabled

  render() {
    return (
      <div style={{ margin: 100 }}>
        <h1>Welcome to mobx-react-ant-boilerplate :)</h1>
        <Switch 
          checkedChildren={ ':)' }
          unCheckedChildren={ ':(' } 
          disabled={ this.disabled } />
        <DevTools />
      </div>
    );
  }
};

export default App;
