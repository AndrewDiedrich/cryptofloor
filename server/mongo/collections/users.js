//make atomic, so if one thing fails for creating table 
//all is cancelled
//begin transaction;

//create mongo collection
    //schema of course documents for collection
    const userSchema = new mongoose.Schema({
        name: String,
        tags: [ String ],
        date: { type: Date, default: Date.now }
    });
    
    //compile schema into model is a Class you can create documents of collection from 
    const User = mongoose.model('User', userSchema);

//commit