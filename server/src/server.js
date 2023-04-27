const http = require('http');
const { getCharById } = require('./controllers/getCharById');
// const {  getCharDetail } = require('./controllers/getCharDetail');

const PORT = 3001;

http.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // const id = req.url.slice(-1);
    let id = req.url.split('/').at(-1);

   if(req.url.includes('/rickandmorty/character')){
    getCharById(res, id);
   }

   
}).listen(PORT, 'localhost');