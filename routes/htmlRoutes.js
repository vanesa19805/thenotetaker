//this will the routes from the 2 html pages
// start off with the requirements
const path = require('path');
const router= require (express).Router();

// refrence to the notes.html
router.get('/notes.html',(res,req)=>{
    res.sendFile(path.join(__dirname,'/notes.html'));
});

//refrence to the index.html
router.get('*',(res,req)=>{
    res.sendFile(path.join(__dirname,'/index.js'));
});