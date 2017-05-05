import { GraphQLString } from 'graphql';

export default {
    name: 'UserType',
    fields: {
        _id: {
            type: GraphQLString,
            name: '_id'
        },
        firstName: {
            type: GraphQLString,
            name: 'firstName'
        },
        lastName: {
            type: GraphQLString,
            name: 'lastName'
        },
        userId: {
            type: GraphQLString,
            name: 'userId'
        }
    }
};