import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/lab09',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Database is connected'));