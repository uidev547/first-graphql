import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';

const app = express();
app.use('/graphql', graphqlHTTP(function(){
    return {
        schema,
        graphiql: true,
        pretty: true
    }
}));

var server = app.listen(3000, function(){
    console.log('app listening on port', server.address().port);
});


