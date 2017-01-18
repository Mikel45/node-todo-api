// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to coonect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // db.collection('Mikhail').insertOne({
    //     name: 'Mikhail',
    //     age: 20
    // }, (err,result) => {
    //     if (err) {
    //         return console.log('Unable to insert information');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});