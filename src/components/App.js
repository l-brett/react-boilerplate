import React from 'react';

export default class App extends React.Component {
  state = {
    AppTitle: 'React Boilerplate'
  }

  render = () => (
    <div className="app">
      <h1>{this.state.AppTitle}</h1>
    </div>
  );
}