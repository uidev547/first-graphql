import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import UserType from '../../types/UserType';
import User from '../../../models/User';


export default {
    type:  new GraphQLList(UserType),
    args: {
        query: {
            name: 'query',
            type: GraphQLString
        }
    },
    resolve(root, params) {
        // Promised way of resolve method
        return User
        .find({})
        .exec()
    }
}