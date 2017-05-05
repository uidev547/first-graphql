import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql';

export default  {
    type: new GraphQLObjectType({
        name: 'Echo1Type',
        fields: {
            name: {
                type: GraphQLString,
                name: 'name'
            },
            number: {
                type: GraphQLInt,
                name: 'number'
            }
        }
    }),
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
    async resolve(root, params) {
        return {
            name: params.name.toUpperCase(),
            number: params.number * 10
        };
    }
}

