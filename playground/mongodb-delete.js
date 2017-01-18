// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })
    db.collection('Mikhail').deleteMany({name: 'Mikhail'});
    db.collection('Mikhail').findOneAndDelete({_id: new ObjectID('587f5b4c1ad47c3a30ded8aa')}).then((result) => {
        console.log(result);
    })
    
    // db.close();
});