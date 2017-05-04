import { GraphQLObjectType } from 'graphql';
import echo from './echo';

const query =  new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        echo
    }
});

export default query;

