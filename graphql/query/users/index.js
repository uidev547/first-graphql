import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import UserType from '../../types/UserType';
import User from '../../../models/User';
import mongoProjection from '../../../utils/mongo-projection';

export default {
    type:  new GraphQLList(UserType),
    args: {
        query: {
            name: 'query',
            type: GraphQLString
        }
    },
    resolve(root, params, context, info) {
        console.log('context', context);
        const projection = mongoProjection(info);
        console.log('projection', projection);
        return User
        .find({})
        .select(projection)
        .exec()
    }
}