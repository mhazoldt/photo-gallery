import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { selectAlbum } from '../actionCreators/selectAlbum'

const flexStyle = {
  display: "flex",
  flexFlow: "row wrap",
  boxSizing: "border-box"
}

const colStyle = {
  width: "calc(100%/3)",
  minWidth: "calc(100%/3)",
  maxWidth: "calc(100%/3)",
  boxSizing: "border-box",
  padding: "20px",
  height: "auto"
}


class Album extends Component {

  componentWillMount() {
    console.log("--component will mount album--")
    let photoProp = this.props.photos
    let currentAlbumProp = this.props.currentAlbum
    let album_nameParam = this.props.match.params.album_name
    console.log({photoProp})
    console.log({currentAlbumProp})
    console.log({album_nameParam})


    this.props.dispatch(selectAlbum(this.props.match.params.album_name))
    console.log("dispatched selectAlbum")
    
  }

  componentRecieveProps() {
    this.props.dispatch(selectAlbum(this.props.match.params.album_name))
  }

  placeScriptTag = () => {
    let script = document.createElement("script")
    script.src = "/removeTooltip.js"

    let scriptDiv = document.querySelector("#dynamic-script-tag")

    scriptDiv.innerHTML = ""
    scriptDiv.appendChild(script)
  }

  render() {
    console.log("--render album--")
    let currentAlbum = this.props.currentAlbum
    console.log({currentAlbum})
    let photos = this.props.photos
    console.log({photos})
    let albumPhotos = photos[currentAlbum]
    console.log({albumPhotos})
    let albumPhotosJsx = []
    
    if(currentAlbum) {
      albumPhotosJsx = albumPhotos.map((albumPhoto) => {
        return (
          <div style={colStyle}>
            <div className="card hoverable materialboxed">
              <div className="card-image"> 
                <img className="tooltipped" data-position="bottom" data-delay="50" data-tooltip={albumPhoto} onClick={this.placeScriptTag} src={"/albums/" + currentAlbum + "/" + albumPhoto} />
              </div>
            </div>
          </div>
        )
      })
    }
   

    return (
      <div className="container" style={{"marginBottom": "40px"}}>
        <div style={flexStyle}>
          {albumPhotosJsx}
        </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("--mapStateToProps Album--")
  console.log({appState})

  return {photos: appState.photos, currentAlbum: appState.currentAlbum}
}

export default withRouter(connect(mapStateToProps)(Album));