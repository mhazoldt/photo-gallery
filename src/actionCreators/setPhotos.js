export function setPhotos() {
        console.log("--action: photos being set, type: 'SET_PHOTOS'--")
        let data = require(`../data/photos.json`)
        console.log("--action: photos data--")
        console.log({data})
        return (
            {type: 'SET_PHOTOS', photos: data}
        )
    
    }