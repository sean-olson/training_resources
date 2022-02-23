const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require('graphql')

// dummy data
const user_data =  [
    {id: '1', name: 'George', age: 25, instrument: 'lead guitar', },
    {id: '2', name: 'John', age: 28, instrument: 'rhythm guitar', },
    {id: '3', name: 'Paul', age: 27, instrument: 'bass', },
    {id: '4', name: 'Ringo', age: 29, instrument: 'drums', },
]

const hobbies_data = [
    {id: '1', title: 'meditation', description: 'Practicing Transcendental Meditation.', user_id: "1", },
    {id: '2', title: 'artistic expression', description: 'Discovering new ways of expressing ideas in music and film.', user_id: "2", },
    {id: '3', title: 'social commentary', description: 'Making poignient statements on poloitics and culture.', user_id: "3", },
    {id: '4', title: 'film production', description: 'Producing motion pictures.', user_id: "4", },
]

const post_data = [
    { id: '1', comment: 'That\'s terrific.', user_id: "1",  },
    { id: '2', comment: 'That\'s terrible!', user_id: "2",  },
    { id: '3', comment: 'Give peace a chance!', user_id: "2",  },
    { id: '4', comment: 'I don\'t get it.', user_id: "3",  },
]

//create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        instrument: {type: GraphQLString},
        posts: {
            type: new GraphQLList(PostType),
            resolve: (parent, args) => {
                return post_data.filter((post) => { return post.user_id === parent.id })
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve: (parent, args) => {
                return hobbies_data.filter((hobby) => { return hobby.user_id === parent.id })
            }
        },        
    })
})

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Documentation for the hobby',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type:  GraphQLString },
        user: { 
            type: UserType,
            resolve: (parent, args) => {
                const user  = user_data[user_data.findIndex((user) => { return user.id === parent.user_id })]
                return typeof user !== 'undefined' ? user : null                
            }
        }        
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Documentation for the post',
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve: (parent, args) => {
                const user  = user_data[user_data.findIndex((user) => { return user.id === parent.user_id })]
                return typeof user !== 'undefined' ? user : null                
            }
        }
    })    
})

const Query = new GraphQLObjectType({
    name: 'Query',
    description: '',
    fields: {
        user: { 
            type: UserType, 
            args: { id: { type: GraphQLID } }, 
            resolve: (parent, args) => {
                const user  = user_data[user_data.findIndex((user) => { return user.id === args.id })]
                return typeof user !== 'undefined' ? user : null
            } 
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: (parent, args) => {
                return user_data
            }
        },
        hobby: {
            type: HobbyType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                const hobby  = hobbies_data[hobbies_data.findIndex((hobby) => { return hobby.id === args.id })]
                return typeof hobby !== 'undefined' ? hobby : null
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve: (parent, args) => {
                return hobbies_data
            }
        },        
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                const post  = post_data[post_data.findIndex((post) => { return post.id === args.id })]
                return typeof post !== 'undefined' ? post : null
            },           
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: (parent, args) => {
                return post_data
            }
        },                 
    }
})

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                // id: { type: GraphQLID },
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                instrument: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                const user = {
                    name: args.name,
                    age: args.age,
                    instrument: args.instrument,
                }
                return user
            }
        },
        createPost: {
            type: PostType,
            args: {
                // id: { type: GraphQLID },
                comment: { type: GraphQLString },
                user_id: { type: GraphQLID },
            },
            resolve: (parent, args) => {
                const post = {
                    comment: args.comment,
                    user_id: args.user_id,
                }
                return post
            }
        },  
        createHobby: {
            type: HobbyType,
            args: {
                // id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                user_id: { type: GraphQLID },
            },
            resolve: (parent, args) => {
                const hobby = {
                    title: args.title,
                    description: args.description,
                    user_id: args.user_id,
                }
                return hobby
            }
        },               
    },
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})