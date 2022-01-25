const fs = require('fs');
const path = require('path')
const figlet = require('figlet')

const filePath = path.join(__dirname, 'ascii', 'ascii.txt')


figlet('hello world', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, (err, data) => {
    if (err) {
        throw err
    } fs.appendFile(filePath, data, err => {
        if (err) {
            throw err
        }
    
        console.log('Файл создан')
    })
})






