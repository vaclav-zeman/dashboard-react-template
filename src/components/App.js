import React, { PropTypes, Component } from 'react';
import Header from './Header/';
import SideNav from './SideNav/';

class App extends Component {
  render() {    
    const pageTitle = this.props.children.props.route.title || '';

    return (
      <div className="container-fluid">
        <div className="row">

          <SideNav />

          <div className="col-md-10 pull-right">
            <Header title={pageTitle} />
            
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
