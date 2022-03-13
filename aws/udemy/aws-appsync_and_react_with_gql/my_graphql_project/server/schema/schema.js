const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql')
const User = require('../model/user')
const Hobby = require('../model/hobby')
const Post = require('../model/post')

// dummy data
// const user_data =  [
//     {id: '1', name: 'George', age: 25, instrument: 'lead guitar', },
//     {id: '2', name: 'John', age: 28, instrument: 'rhythm guitar', },
//     {id: '3', name: 'Paul', age: 27, instrument: 'bass', },
//     {id: '4', name: 'Ringo', age: 29, instrument: 'drums', },
// ]

// const hobbies_data = [
//     {id: '1', title: 'meditation', description: 'Practicing Transcendental Meditation.', user_id: "1", },
//     {id: '2', title: 'artistic expression', description: 'Discovering new ways of expressing ideas in music and film.', user_id: "2", },
//     {id: '3', title: 'social commentary', description: 'Making poignient statements on poloitics and culture.', user_id: "3", },
//     {id: '4', title: 'film production', description: 'Producing motion pictures.', user_id: "4", },
// ]

// const post_data = [
//     { id: '1', comment: 'That\'s terrific.', user_id: "1",  },
//     { id: '2', comment: 'That\'s terrible!', user_id: "2",  },
//     { id: '3', comment: 'Give peace a chance!', user_id: "2",  },
//     { id: '4', comment: 'I don\'t get it.', user_id: "3",  },
// ]

//types
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
                return Post.find({ user_id: parent.id })
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve: (parent, args) => {
                return Hobby.find({ user_id: parent.id })
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
        user_id: {type: GraphQLString },
        user: { 
            type: UserType,
            resolve: (parent, args) => {
               return User.findById(parent.user_id)           
            }
        },        
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Documentation for the post',
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user_id: {type: GraphQLString },
        user: { 
            type: UserType,
            resolve: (parent, args) => {
               return User.findById(parent.user_id)           
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
                console.log(args);
                return  User.findById(args.id)
            } 
        },
        users: {
            type: new GraphQLList(UserType),
            resolve: (parent, args) => {
                return  User.find()
            }
        },
        hobby: {
            type: HobbyType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Hobby.findById(args.id)
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve: (parent, args) => {
                return Hobby.find()
            }
        },        
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Post.findById(args.id)
            },           
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: (parent, args) => {
                return Post.find()
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt },
                instrument: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const user = User({
                    name: args.name,
                    age: args.age,
                    instrument: args.instrument,
                })

                return user.save()
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                instrument: { type: new GraphQLNonNull(GraphQLString) },                
            },
            resolve: (parent, args) => {
                return User.findByIdAndUpdate(
                    args.id, 
                    { 
                        $set: {
                            name: args.name,
                            age: args.age,
                            instrument: args.instrument,
                        }
                    },
                    { new: true } // send back the updated type
                )
            },
        },
        removeUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: async (parent, args) => {
                try {
                    const filter = { user_id: args.id }
                    await Hobby.deleteMany(filter)
                    await Post.deleteMany(filter)
                    let removed_user = User.findByIdAndRemove(args.id)
                    return removed_user
                } catch(err) {
                    throw new Error(`this error occured attempting to remove the user: ${ err. message }`)
                }
            }
        },        
        createPost: {
            type: PostType,
            args: {
                comment: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, args) => {
                const post = Post ({
                    comment: args.comment,
                    user_id: args.user_id,
                })
                return post.save()
            }
        },  
        updatePost : {
            type: PostType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                comment: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) },                
            },
            resolve: (parent, args) => {
                return Post.findByIdAndUpdate(
                    args.id, 
                    { 
                        $set: {
                            comment: args.comment,
                            user_id: args.user_id,
                        }
                    },
                    { new: true } // send back the updated type
                )                
            }
        },
        removePost: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                try {
                    let removed_post = Post.findByIdAndRemove(args.id)
                    return removed_post
                } catch(err) {
                    throw new Error(`this error occured attempting to remove the post: ${ err. message }`)
                }
            }
        },
        createHobby: {
            type: HobbyType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, args) => {
                const hobby = Hobby({
                    title: args.title,
                    description: args.description,
                    user_id: args.user_id,
                })
                return hobby.save()
            }
        }, 
        updateHobby: {
            type: HobbyType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                user_id: { type: new GraphQLNonNull(GraphQLID) },                
            },
            resolve: (parent, args) => {
                return Hobby.findByIdAndUpdate(
                    args.id, 
                    {
                        $set: {
                            title: args.title,
                            description: args.description,
                            user_id: args.user_id,
                        }
                    },
                    { new: true },
                )
            }
        }, 
        removeHobby: {
            type: HobbyType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                try {
                    let removed_hobby = Hobby.findByIdAndRemove(args.id)
                    return removed_hobby
                } catch(err) {
                    throw new Error(`this error occured attempting to remove the hobby: ${ err. message }`)
                }
            }
        },                     
    },
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})