import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3/movie/550?api_key=f907940a64c1ec5b521b71de96e634da";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTA3OTQwYTY0YzFlYzViNTIxYjcxZGU5NmU2MzRkYSIsInN1YiI6IjY0ZjQ4NGM1NWYyYjhkMDBhYmNhYzIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dvg-fuPS3MQ830bBl--tRyPPsXEIJHE7yKSzvc8X8nQ";

const headers = {
    Authorization : "bearer" + TMDB_TOKEN,

};
export const fetchDataFromApi = async (url, params) =>{
try{
    const {data} = await axios.get(BASE_URL + url , {
        headers,
        params
    })
    return data;
}
catch (err){
    console.log(err);
    return err;
}
}

///32:35 / 6:38:14 api error while fetching it 