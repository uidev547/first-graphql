import express from 'express';
import graphqlHTTP from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            echo: {
                type: GraphQLString,
                resolve() {
                    return 'Echo.. ' + new Date()
                }
            }
        }
    })
});

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


