const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLFloat, GraphQLNonNull, GraphQLBoolean } = require('graphql')

//Scalar Type 
/**
 * String (GraphQLString)
 * Int (GraphQLInt)
 * Float (GraphQLFloat)
 * Boolean (GraphQLBoolean)
 * ID (GraphQLID)
 */

 const Residence = new GraphQLObjectType({
    name: 'Residence',
    description: 'Represents the Residence Type',
    fields: () => ({
        id: { type: GraphQLID },
        street: { type: GraphQLString },
        city: { type: GraphQLString },
        state_prov: { type: GraphQLString },
        country: { type: GraphQLString },
        postal_code: { type: GraphQLString },

    })
 })

 const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represents a Person TYpe',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        is_married: { type: GraphQLBoolean },
        gpa:  { type: GraphQLFloat},
        residence: {
            type: Residence,
            resolve: (parent, args) => {
                return { 
                    street: parent.residence.street,
                    city: parent.residence.city,
                    state_prov: parent.residence.state_prov,
                    country: parent.residence.country,
                    postal_code: parent.residence.postal_code,
                }
            }
        }
    }),
})

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Description',
    fields: {
        person: {
            type: Person,
            args: { id: { type: GraphQLID } },
            resolve: () => {
                const person = {
                    name: 'Mick',
                    age: 78,
                    is_married: true,
                    gpa: 4.2,
                    residence: {
                        street: '22729 Waters Drive',
                        city: 'Crestline',
                        state_prov: 'California',
                        country: 'U.S.',
                        postal_code: '92325',
                    }
                }
                return person
            }
        }                
    }
})




module.exports = new GraphQLSchema({
    query: Query,
})