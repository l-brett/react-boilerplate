import React from 'react';

import store from '../stores/AppStore';

export default class App extends React.Component {
  state = {
    AppTitle: 'React Boilerplate'
  }

  componentWillMount() {
    store.subscribe(this.handleStoreSubscription);
    this.handleStoreSubscription();
  }

  handleStoreSubscription = () => {
    const {config: {title: AppTitle} } = store.getState();
    if(AppTitle != this.state.AppTitle) {
      this.setState(() => ({
        AppTitle
      }));
    }
  }

  render = () => (
    <div className="app">
      <h1>{this.state.AppTitle}</h1>
    </div>
  );
}