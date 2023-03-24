import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService{

    async getPosts(limit, skip){
        try {
            const res = await api.get(`posts?limit=${limit}&skip=${skip}&select=title,reactions,userId,body`)
            console.log(res.data)
            AppState.posts = res.data.posts
        } catch (error) {
            logger.error(error)
        }
    }

    async getPostById(id){
        console.log(id)
        try {
            const res = await api.get(`posts/${id}`)
            console.log(res.data)
            AppState.post = res.data
        } catch (error) {
            logger.error(error)
        }
    }


}

export const postService = new PostService()