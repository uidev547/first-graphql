import { GraphQLString } from 'graphql';
const echo1 = {
    type: GraphQLString,
    resolve() {
        return 'Echo..updated' + new Date()
    }
};
export default echo1;