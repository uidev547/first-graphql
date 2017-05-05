import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';
import Echo1Type from '../../types/echo1';
export default  {
    type: new GraphQLObjectType(Echo1Type),
    args: {
        name: {
            type: GraphQLString,
            name: 'name'
        },
        number: {
            type: GraphQLInt,
            name: 'number'
        }
    },
    resolve(root, params) {
        return {
            name: params.name.toUpperCase(),
            number: params.number * 10,
            date: new Date().toString()
        };
    }
}

