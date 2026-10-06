// import axios from 'axios';

// Con esta clase estamos siguiendo el "patrón adaptador", es decir
// cuando tenemos fuertes dependencias de una librería de terceros,
// se recomienda crear una clase adaptadora, para que después sea más fácil
// hacer modificaciones a futuro en caso de que la librería sea modificada.

export class HttpClient {

    // Elimino la dependencia de axios
    // async get(url:string){
    //     const {data, status} = await axios.get(url);
    //     return {data,status};
    // }
    
    // Creo mi propia función get, sin dependencia
    async get(url:string){
        const resp = await fetch(url);
        const data = await resp.json();
        return {data, status: resp.status};
    }





}