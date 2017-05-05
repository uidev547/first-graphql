import { GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '../../types/UserType';
import User from '../../../models/User';
import mongoProjection from '../../../utils/mongo-projection';


export default {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        }
    },
    async resolve(root, params, options) {
        const projection = mongoProjection(options);
        console.log('projection', projection);
        const user = await User.findById(params.id).select(projection);
        return user;
    }
}