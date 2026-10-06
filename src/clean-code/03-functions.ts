(() => {

    // función para obtener información de una película por Id
    // function getAllMovies( movieId: string ) {
    //     console.log({ movieId });
    // }
    function getMovieById(movieId: string){
        console.log({movieId});
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // function getAllMovieActors( id: string ) {
    //     console.log({ id });
    // }
    function getMovieActorsById(id: string){
        console.log({id});
    }

    // funcion para obtener el bio del actor por el id
    // function getUsuario( ActorId: string ) {
    //     console.log({ ActorId });
    // }
    function getActorBiographyById(id: string){
        console.log({id});
    }

    // Crear una película
    // function movie(title: string, description: string, rating: number, cast: string[] ) {
    //     console.log({ title, description, rating, cast });
    // }
    interface MovieAttributes {
        cast:           string[];
        description:    string;
        rating:         number;
        title:          string;
    }
    function createMovie({title, description, rating, cast}: MovieAttributes){
        console.log({title, description, rating, cast});
    }

    // Crea un nuevo actor
    // function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
    //     // tarea asincrona para verificar nombre
    //     // ..
    //     // ..
    //     if ( fullName === 'fernando' ) return false;

    //     console.log('Crear actor');
    //     return true;        

    // }

    
    function createActor(firstName: string, lastName: string, birthdate: Date): boolean{
        console.log({firstName, lastName, birthdate});
        return true;
    }
    

    interface personAttributes{
        isDead: boolean;
        isSeparated: boolean;
        isRetired: boolean;
    }

    // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    //     let result;
    //     if ( isDead ) {
    //         result = 1500;
    //     } else {
    //         if ( isSeparated ) {
    //             result = 2500;
    //         } else {
    //             if ( isRetired ) {
    //                 result = 3000;
    //             } else {
    //                 result = 4000; 
    //             }
    //         }
    //     }
        
    //     return result;
    // }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }: personAttributes): number => {
        return isDead ? 1500 : (isSeparated ? 2500 : (isRetired ? 3000 : 4000));
    }


})();





