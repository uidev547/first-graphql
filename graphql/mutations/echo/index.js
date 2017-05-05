import { GraphQLString, GraphQLInt } from 'graphql';

export default  {
    type: GraphQLString,
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
    async resolve(roor, params) {
        return `Mutation ${params.name} - ${params.number}`;
    }
}

