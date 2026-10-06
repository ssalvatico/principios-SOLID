import localPosts from '../data/local-database.json'
import { Post } from './05-dependency-b';


export abstract class PostProvider {

    abstract getPosts():Promise<Post[]>;

}



export class LocalDataBaseService implements PostProvider {
    constructor() {}

    async getPosts():Promise<Post[]> {
        return [
            {
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'userId': 1,
            },
            {
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
                'id': 2,
                'title': 'qui est esse',
                'userId': 1,
            }]
    }
}

export class JsonDataBaseService implements PostProvider {
    constructor() {}

    async getPosts():Promise<Post[]> {
        return localPosts;
    }

}

export class WebAPIPostService {
    constructor() {}

    async getPosts():Promise<Post[]> {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
