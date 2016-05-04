import React, { PropTypes, Component } from 'react';
import Header from './Header/';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="Content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
