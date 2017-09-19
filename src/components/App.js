import React, { Component } from 'react';
import SideNav from './SideNav'
// import { NavLink } from 'react-router-dom';
import { setPhotos } from '../actionCreators/setPhotos'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class App extends Component {
  componentWillMount() {
    console.log("--app will mount--")
    this.props.dispatch(setPhotos())

  }

  render() {

    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper light-blue darken-4">
            <a href="/" className="brand-logo center">Photo Gallery</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a><span data-activates="slide-out" className="button-collapse">Albums</span></a></li>
            </ul>
          </div>
        </nav>

        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("--mapStateToProps App--")
  console.log({appState})

  return {photos: appState.photos, selectedAlbum: appState.selectedAlbum}
}

export default withRouter(connect(mapStateToProps)(App));
