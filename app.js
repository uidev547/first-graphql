import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import mongoose from 'mongoose';

const app = express();
app.use('/graphql', graphqlHTTP(function(){
    return {
        schema,
        graphiql: true,
        pretty: true
    }
}));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/first-graphql');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open');
});
var server = app.listen(3000, function(){
    console.log('app listening on port', server.address().port);
});


