const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/cryptofloor')
    //returns a promise
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('could not connect to mongodb...', err));

    //schema of course documents for collection
const userSchema = new mongoose.Schema({
    name: String,
    tags: [ String ],
    date: { type: Date, default: Date.now }
});

//compile schema into model is a Class you can create documents of collection from 
const User = mongoose.model('User', userSchema);

async function createUser() {
    //object based on class, maps to doucment in mongodb
    const user = newUser({
        name: 'Andrew',
        id: String,
        tags: ['EOS', 'frontend']
    })
    //returns promise
    const result = await user.save();
    console.log(result);
};
createUser();

// async function getCourses() {
//     //.find method by id
//     const courses = await Course
//         .find({ author: 'Mosh', isPublished: true })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 });
//     console.log(courses);
// }



