const path = require('path')

console.log('Название файла: ', path.basename(__filename));

setTimeout(()=>console.log('Имя директории: ', path.dirname(__filename)),3000);


