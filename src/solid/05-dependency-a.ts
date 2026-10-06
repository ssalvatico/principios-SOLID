import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebAPIPostService } from './05-dependency-c';


// Main
(async () => {

    const postProvider = new JsonDataBaseService();
    // const postProvider = new LocalDataBaseService();
    // const postProvider = new WebAPIPostService();

    const postService = new PostService(postProvider); // Dependencia expuesta

    const posts = await postService.getPosts();

    console.log({ posts });

})();