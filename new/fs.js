const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'test.txt')

fs.writeFile(filePath, '', err => {
    if (err) {
        throw err
    }

    console.log('Файл создан')
})