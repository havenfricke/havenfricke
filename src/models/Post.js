export class Post{
    constructor(data){
        this.id = data.posts.id
        this.title = data.posts.title
        this.reactions = data.posts.reactions
        this.userId = data.posts.userId
    }
}