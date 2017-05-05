import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import queries from './query';
import mutations from './mutations';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: mutations
    })
});

export default schema;