import { PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // Inyección de dependencias
    constructor( private postProvider: PostProvider ) {}

    async getPosts() {

        // const jsonDB = new LocalDataBaseService(); // Dependencias ocultas
        // const jsonDB = new JsonDataBaseService();

        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
