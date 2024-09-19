// function to fetch movie data from the given url
function fetchMovieData(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            throw new Error("there was a problem with the fetch operation: " );
        });
}
 
// function to get names of high-rated movies (rating >= 9)
function getHighRatedMovies(movies) {
    // check if movies is an array
    if (!Array.isArray(movies)) {
        throw new Error("invalid data format: movies should be an array.");
    }
    return movies
        .filter(movie => movie.rating >= 9)
        .map(movie => movie.name);
}
 
// main function to fetch, display, and get high-rated movie names
async function main() {
    const URL = "https://api.programiz.pro/api/Demo/javascript/movies";
    try {
        const movieData = await fetchMovieData(URL);
 
        // check if movieData is null
        if (!movieData) {
            throw new Error("failed to fetch movie data.");
        }
 
        // check if movieData.movies is valid
        if (!Array.isArray(movieData.movies)) {
            throw new Error("invalid movie data format.");
        }
 
        console.log(movieData);
 
        console.log("\nmovies rated 9 or above:");
        const highRatedMovies = getHighRatedMovies(movieData.movies);
        console.log(highRatedMovies);
    } catch (error) {
        // log any errors that occur in the main function
        console.error("An error occurred");
    }
}
 
main();