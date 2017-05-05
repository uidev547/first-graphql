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
    async resolve(root, params) {
        const users = await User.find({});
        return users;
    }
}