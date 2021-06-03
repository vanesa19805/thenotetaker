const uuidv4= require ('uuid');

class Store{
read(){
    return('db/db.json')
}
write(note){
    return('db/db.json',JSON(note));
}
getNotes(){
    return this.read().then((note)=>{
        let myNote;
        try{
            myNote = [].concat(JSON.parse(note));
        }catch (err){
            myNote = [];
        }
        return myNote;
    });
}

addedNote(note){
    const{title,text}= note;
    if(!title||!text){
        throw Error("title and text cannot be blank");
    }
    const newNote={title,text,id:uuid()};
    return this.getNotes()
    .then((note)=>[...note,newNote])
    .then((updatedNote)=> this.write(updatedNote))
    .then(()=> newNote);
}


}
module.exports =new Store();