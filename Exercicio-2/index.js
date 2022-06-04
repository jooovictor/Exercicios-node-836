const { rejects } = require('assert')
const fs = require('fs')

const file = new Promise((res, rej) => fs.readFile('./text.txt', (err, data) => {
    if (err) {
        rej(err)
    } else {
        res(data.toString())
    }
})).then()

console.log(file)