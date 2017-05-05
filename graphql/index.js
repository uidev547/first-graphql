import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import queries from './query';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: queries
    })
});

export default schema;