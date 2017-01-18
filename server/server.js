var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({text: 'Go to sleep'});

// otherTodo.save().then((doc) =>{
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unbable to save todo', e);
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

var newUser = new User({email: 'smth@gmail.com'});

newUser.save().then((doc) => {
    console.log('User saved', doc);
}, (e) => {
    console.log('Unable to save user', e);
});