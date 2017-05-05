import { GraphQLString, GraphQLInt } from 'graphql';

export default {
    name: 'Echo1Type',
    fields: {
        name: {
            type: GraphQLString,
            name: 'name'
        },
        number: {
            type: GraphQLInt,
            name: 'number'
        },
        date: {
            type: GraphQLString,
            name: 'date'
        }
    }
};