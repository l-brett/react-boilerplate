import React from 'react';

import store from '../stores/AppStore';
import { connect } from 'react-redux';

export class App extends React.Component {
  render = () => (
    <div className="app">
      <h1>{this.props.AppTitle}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  AppTitle:state.config.title
});

export default connect(mapStateToProps)(App);