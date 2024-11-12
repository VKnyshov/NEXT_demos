import {IComments, IPost, IUser} from "@/models/types";

const base: string = 'https://jsonplaceholder.typicode.com'

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    postBaseUrl: '/posts',
    allPosts: () => base + urlBuilder.postBaseUrl,
    commentBaseUrl: '/comments',
    allComments: () => base + urlBuilder.commentBaseUrl,


    // singleUsers: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,
}
export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch(urlBuilder.allUsers())
            .then(value => value.json())
        console.log(users)
        return users;
    },


            // getUserById: async (id: string | number):Promise<IUser | null> =>{
            //     const user:IUser = await fetch(urlBuilder.singleUsers(id))
            //         .then(value => value.json());
            //     console.log(user);
            //     return user;
            // }
        }

export const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const posts = await fetch(urlBuilder.allPosts())
            .then(value => value.json())
        console.log(posts)
        return posts;
    }}

export const commentService = {
        getAllComments: async (): Promise<IComments[]> => {
            const comments = await fetch(urlBuilder.allComments())
                .then(value => value.json())
            console.log(comments)
            return comments;
        }}

