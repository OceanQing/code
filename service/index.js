const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let index = fs.readFileSync("./dist/index.html");
    res.write(index);
    res.end()
}).listen(80, () => {
    console.log('http://localhost:80')
});
