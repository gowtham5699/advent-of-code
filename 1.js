// file system module
const fs = require('fs'); 

//Path to your text file
const filePath = '/Users/gowthamravella/Downloads/advent1.txt';

//Read the text file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }

    const array = data.split(/\r?\n/).map(line=>line.trim()).filter(line => line !== '');
    
    const regex = /\d+/g;
    const calibrationValues = (array.map(str => {
        const match = str.match(regex);
        return match.join('')
    }))

    const firstAndLast = (calibrationValues.map(str => {
        if (str.length > 1) {
            return Number(str[0] + str[str.length - 1])
        } else {
            return Number(str + str)
        }
    }))
    
    let total = 0
    for (let i = 0; i < firstAndLast.length; i++) {
        total += firstAndLast[i]
    }
    console.log(total)
})