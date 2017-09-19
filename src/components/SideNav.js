import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { selectAlbum } from '../actionCreators/selectAlbum'

class SideNav extends Component {
  componentWillMount() {

  }


  render() {

    let albums = this.props.photos
    let albumLinks = []

    Object.keys(albums).forEach((album) => {
      albumLinks.push(
        <li><a href={"/" + album}><i className="material-icons">folder</i>{album}</a></li>

      )
    })

    return (
      <div>
        <ul id="slide-out" className="side-nav">
          {albumLinks}
        </ul>

      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("--mapStateToProps SideNav--")
  console.log({appState})

  return {photos: appState.photos, currentAlbum: appState.currentAlbum}
}


export default withRouter(connect(mapStateToProps)(SideNav));