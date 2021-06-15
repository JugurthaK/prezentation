const path = require('path')
const fs = require('fs')

const prezOrReadme = () => {
  const _ = path.join(__dirname, '..') 
  const sourceFile = fs.readdirSync(_).filter(fileName => fileName.toLocaleLowerCase() === 'prezentation.md' 
  || fileName.toLocaleLowerCase() === 'readme.md')
  
  return path.join(__dirname, '..', sourceFile[0])
}

module.exports = { prezOrReadme }