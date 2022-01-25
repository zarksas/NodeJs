const fs = require('fs');
const path = require('path')


const filePath = path.join(__dirname, 'test', 'test.txt')

fs.writeFile(filePath, 'Hello World', err => {
    if (err) {
        throw err
    }

    console.log()
})
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
})