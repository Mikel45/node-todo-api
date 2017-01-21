const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5883a1297a24082c0b2ee45f'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('58839f0efd3df124178491c6').then((todo) => {
//     console.log(todo);
// });