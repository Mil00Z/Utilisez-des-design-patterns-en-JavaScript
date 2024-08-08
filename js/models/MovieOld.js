class MovieOld {
    constructor(data) {

        this._picture = data.picture;
        this._synopsis = data.synopsis;
        this._duration = data.duration;
        this._released_in = data.released_in;
        this._title = data.title;
        
    }

   get duration() {
         return this._duration
   }

   get synopsis() {

      return this._synopsis;

   }

   get duration() {

      return this._duration;

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

   get title() {
      return this._title;
   }



}
