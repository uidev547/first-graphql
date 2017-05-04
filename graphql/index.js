import { GraphQLSchema } from 'graphql';

import query from './query';

const schema = new GraphQLSchema({
    query: query
});

export default schema;