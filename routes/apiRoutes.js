//need to require express Route
const router = require('express').Router();
const store = require ("..db/holds.js");
//we will also use the npm UUID to get a unique id


//`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get('./holds', (req,res)=> {
    store
    .getNote("")
    .then((notes)=>{
    return res.json(notes);
})
.catch((err) =>res.status(500).json(err));
});

//POST
//`POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
router.post('/holds',(req,res) =>{
    store
    .addNote((req.body))
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
 

module.exports = router;