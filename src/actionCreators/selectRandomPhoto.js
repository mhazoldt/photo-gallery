export function selectRandomPhoto(photos) {
    console.log("--action: selectRandomPhoto--")
    let numberOfAlbums = Object.keys(photos).length
    console.log({numberOfAlbums})

    let albums = Object.keys(photos)
    console.log({albums})

    let lastIndex = numberOfAlbums - 1
    console.log({lastIndex})


    let randomIndex = Math.floor((Math.random() * lastIndex) + 0);
    let selectedAlbum = albums[randomIndex]
    console.log({selectedAlbum})

    let albumArr = photos[selectedAlbum]
    console.log({albumArr})


    let numberOfPhotos = albumArr.length
    lastIndex = numberOfPhotos - 1
    randomIndex = Math.floor((Math.random() * lastIndex) + 0);
    console.log({randomIndex})

    let selectedPhoto = albumArr[randomIndex]
    console.log({selectedPhoto})

    let photoUrl = "albums/" + selectedAlbum + "/" + selectedPhoto
    console.log({photoUrl})

    return (
        {type: 'SELECT_RANDOM_PHOTO', randomPhoto: photoUrl}
    )

}