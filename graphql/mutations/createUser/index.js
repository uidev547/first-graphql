import { GraphQLString, GraphQLObjectType } from 'graphql';
import UserType, { UserTypeDef } from '../../types/UserType';
import User from '../../../models/User';

const args = {
    firstName: UserTypeDef.fields.firstName,
    lastName: UserTypeDef.fields.lastName,
    userId: UserTypeDef.fields.userId,
    password: {
        type: GraphQLString,
        name: 'password'
    }
};

export default  {
    type: UserType,
    args: args,
    async resolve(roor, params) {
        console.log('params', params);
        const newUser = await User.create(params);
        return newUser;
    }
};

