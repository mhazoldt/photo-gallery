export function selectAlbum(albumName) {
    console.log("--action: setAlbum--")
    console.log({albumName})
    return (
        {type: 'SELECT_ALBUM', albumName: albumName}
    )

}