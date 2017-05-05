import { GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '../../types/UserType';
import User from '../../../models/User';


export default {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        }
    },
    async resolve(root, params) {
        const user = await User.findById(params.id);
        return user;
    }
}