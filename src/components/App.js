import React, { PropTypes, Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
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
