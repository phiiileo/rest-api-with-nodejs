const fs = require('fs');
const { POINT_CONVERSION_UNCOMPRESSED } = require('constants');

fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
    console.log(__filename)
})