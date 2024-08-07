class Movie  {

    constructor(data) {
        this._picture = data.picture;
        this._synopsis = data.synopsis;
        this._duration = data.duration;
        this._released_in = data.released_in;
        this._title = data.title;
    }


    get title() {

        return this._title.fr ? this._title.fr : this._title.en;
    
     }

     get duration() {

        if (this._duration > 60) {

            let hours = Math.floor(this._duration / 60);

            let mins = Math.round(((this._duration / 60) - hours ) * 60);

            if (mins < 10) {

                mins = `0${mins}`;

            }
        
            return `${hours}h${mins}mins`;
    
        }

    }

    get synopsis() {

        return this._synopsis;
    
     }


     get released_in() {

        return this._released_in;
     }
    

     get thumbnails() {
    
        return `./assets/thumbnails/${this._picture}`;
    
     }


     get picture () {

        return `./assets/${this._picture}`;
     }


}
