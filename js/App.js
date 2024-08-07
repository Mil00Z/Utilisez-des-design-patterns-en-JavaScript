class App {
    constructor(url) {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi(url);
    }

    async main() {
        const moviesData = await this.moviesApi.getMovies();


        // const mapOldMovies = moviesData.map(movie => new OldMovie(movie));

        // mapOldMovies.forEach((movie) => {

        //     const Template = new MovieCard(movie)
        //     this.$moviesWrapper.appendChild(Template.createMovieCard())        
        // })   

        const mapNewMovies = moviesData.map(movie => new Movie(movie));

        console.log(mapNewMovies);

        mapNewMovies.forEach((movie) => {
            const Template = new MovieCard(movie)
            
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        });  
             
    }

}


//Paths Fetch
const oldDatasJson = '/data/old-movie-data.json';
const newDatasJson = '/data/new-movie-data.json';

const app = new App(newDatasJson);
app.main();
