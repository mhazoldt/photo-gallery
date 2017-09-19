const dtj = require('directory-to-json')
const resolve = require('resolve-dir')
const path = require('path')

console.log(process.cwd())

dtj(resolve('../public/albums'), '../src/data/photos.json', (err) => console.log(err))