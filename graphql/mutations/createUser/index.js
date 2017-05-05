import { GraphQLString, GraphQLObjectType } from 'graphql';
import UserType from '../../types/UserType';
import User from '../../../models/User';

const args = {
    firstName: UserType.fields.firstName,
    lastName: UserType.fields.lastName,
    userId: UserType.fields.userId,
    password: {
        type: GraphQLString,
        name: 'password'
    }
};

export default  {
    type: new GraphQLObjectType(UserType),
    args: args,
    async resolve(roor, params) {
        console.log('params', params);
        const newUser = await User.create(params);
        return newUser;
    }
};

