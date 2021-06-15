const fs = require('fs')
const parse = require('node-html-parser').parse
const path = require('path')
const { prezOrReadme } = require('./utils/utils')

const TEMPLATEPATH = path.join(__dirname, 'template', 'template.html')
const PREZPATH = prezOrReadme();

function prezentation(templatePath = TEMPLATEPATH){

  try {
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const root = parse(templateContent)

    fs.readFile(PREZPATH, 'utf-8', (err, md) => {
      if (err)
        throw err;

      const body = root.querySelector('#prezentation')
      body.set_content(`
      <textarea id="source">\n${md}\n</textarea>`)
      const output = path.join(__dirname, 'dist', 'prezentation.html')
      if (!fs.existsSync(path.join(__dirname, 'dist')))
        fs.mkdirSync(path.join(__dirname, 'dist'))
  
      fs.writeFileSync(output, root.toString())
    })

  } catch (e) {
    throw e
  }
}

module.exports = prezentation