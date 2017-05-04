import { GraphQLString } from 'graphql';
const echo = {
    type: GraphQLString,
    resolve() {
        return 'Echo..updated' + new Date()
    }
};
export default echo;