class MovieCard {
    constructor(movie) {
        this._movie = movie
    }

    createMovieCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._movie.title}"
                    src="/assets/thumbnails/${this._movie.picture}"
                />
                <p class="movie-pitch">${this._movie.synopsis ?? "pas de résumé disponible"}</p>
            <h3 class="movie-title fs-16 center">${this._movie.title}</h3>
            <p class="movie-datas fs-14 center">
                <span class="movie-release">${this._movie.released_in}</span>
                -
                <span class="movie-duration">${this._movie.duration}</span>
            </p>
        `
        
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
