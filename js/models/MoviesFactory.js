class MoviesFactory {

    constructor(data,type) {

        if (type === 'new') {

            return new MovieNew(data);

        } else if (type === 'old') {

            return new MovieOld(data)

        } else if(type === 'stalone'){

            return new MovieStalone(data);
            
        } else {

            console.error('unknown type of Datas');

        }

    }

}