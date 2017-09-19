import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { selectRandomPhoto } from '../actionCreators/selectRandomPhoto'
import '../styles/App.css'

const Materialize = window.Materialize

const flexStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "20px"
}


class Home extends Component {
    componentWillMount() {
        console.log("--component will mount home--")
        let photos = this.props.photos
        let currentAlbumProp = this.props.currentAlbum
        let album_nameParam = this.props.match.params.album_name
        console.log({photos})
        console.log({currentAlbumProp})
        console.log({album_nameParam})
        let dispatch = this.props.dispatch
        let album = Object.keys(photos)

        setInterval(() => {
            dispatch(selectRandomPhoto(photos))
        }, 3000);

    }

    componentDidUpdate() {
        Materialize.fadeInImage("#randomImage")
        
    }

    render() {
        let photoToDisplay 
        if(!(this.props.randomPhoto)) {
            let albums = Object.keys(this.props.photos)
            let album = albums[0]
            photoToDisplay = this.props.photos[album][0]
            photoToDisplay = "/" + album + "/" + photoToDisplay
        } else {
            photoToDisplay = this.props.randomPhoto
        }
        return (
            <div className="container" style={flexStyle}>
                <img src={photoToDisplay} id="randomImage" />
            </div>
        );
    }
}

function mapStateToProps(appState) {
    console.log("--mapStateToProps Home--")
    console.log({appState})
  
    return {photos: appState.photos, selectedAlbum: appState.selectedAlbum, randomPhoto: appState.randomPhoto}
}

export default withRouter(connect(mapStateToProps)(Home));
