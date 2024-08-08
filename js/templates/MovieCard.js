class MovieCard {
    constructor(movie) {
        this._movie = movie
    }

    createMovieCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper');
       

        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="nom du film : ${this._movie.title}"
                    src="${this._movie.picture}"
                />
                <p class="movie-pitch" style="background:linear-gradient(to left,rgba(0,0,0,var(--op)) 0%, rgba(0,0,0,var(--op)) 100%), url(${this._movie.picture}) no-repeat center/cover">${this._movie.synopsis ?? "pas de résumé disponible"}</p>
            <h3 class="movie-title fs-16 center">${this._movie.title}</h3>
            <p class="movie-datas fs-14 center">
                <span class="movie-release">${this._movie.released_in}</span>
                -
                <span data-timing="${this._movie.duration}">${this._movie.duration}</span>
            </p>
        `
        
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
