import { GraphQLObjectType, GraphQLString } from 'graphql';

export const UserTypeDef = {
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
const UserType = new GraphQLObjectType(UserTypeDef);
export default UserType;
