import React from 'react';
import { combineReducers } from 'redux'


function setPhotos(state=[], action) {
    switch(action.type){
        case 'SET_PHOTOS': {
            console.log("--setPhotos reducer: recieved action 'SET_PHOTOS'--")
            state = action.photos
            console.log(state)
            console.log("--setting state--")
            console.log({state})
            return state
        }
        default: {
            return state
        }
    }
   
}

function selectAlbum(state='', action) {
    switch(action.type){
        case 'SELECT_ALBUM': {

            console.log('### select album reducer start ###')
            console.log("--action type--")
            console.log(action.type)
            console.log("--album name--")
            console.log(action.albumName)
            console.log("--state--")
            console.log(state)
            
            let newState = action.albumName
            console.log("--new state--")
            console.log(newState)
            console.log('### select album reducer end ###')
            return newState
        }
        default: {
            return state
        }
    }
   
}

function selectRandomPhoto(state='', action) {
    switch(action.type){
        case 'SELECT_RANDOM_PHOTO': {
            let newState = action.randomPhoto
            return newState
        }
        default: {
            return state
        }
    }
   
}


const allReducers = combineReducers({photos: setPhotos, currentAlbum: selectAlbum, randomPhoto: selectRandomPhoto})

export default allReducers