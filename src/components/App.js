import React, { PropTypes, Component } from 'react';
import Header from './Header/';
import SideNav from './SideNav/';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <SideNav />

          <div className="col-md-10 pull-right">
            <Header />
            
            <main className="Content">
              {this.props.children}
            </main>
          </div>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
