class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json');
        this.staloneMoviesApi = new MovieApi('/data/external-movie-data.json');
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const oldmoviesData = await this.oldMoviesApi.getMovies();

        const newmoviesData = await this.newMoviesApi.getMovies();

        const stalonemoviesData = await this.staloneMoviesApi.getMovies();

        this.$moviesWrapper.style.setProperty('--gridCol',3);
        let newMoviesList = document.createElement('div');
        newMoviesList.classList.add('old');

        let oldMoviesList = document.createElement('div');
        oldMoviesList.classList.add('new');
       
        document.querySelector('.movies-wrapper').append(oldMoviesList,newMoviesList);


        const oldMovies = oldmoviesData.map(movie => new MoviesFactory(movie,'old'));

        oldMovies.forEach(movie => {
                const Template = new MovieCard(movie);
        
                document.querySelector('.old').append(
                    Template.createMovieCard()
                )
            });

        const newMovies = newmoviesData.map(movie => new MoviesFactory(movie,'new'));

        newMovies.forEach(movie => {
                const Template = new MovieCard(movie)
                document.querySelector('.new').append(
                    Template.createMovieCard()
                    
                )
            });



        let newMovieWrapper = document.createElement('div');
        newMovieWrapper.classList.add('stalone');
        this.$moviesWrapper.append(newMovieWrapper);

        const staloneMoviesList = stalonemoviesData.map((movie) => {
            return new MovieStalone(movie,'stalone')
        });


    
        staloneMoviesList.forEach((movie)=>{

            // movie.medias;
            // movie.infos;
            
            const Template = new MovieCard(movie);
            document.querySelector('.stalone').append(
                Template.createMovieCard()
                
            )
        })

    }

}

const app = new App();
app.main();
