class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.director = movie.director;
        this.genre = movie.genre;
        this.year = movie.year;
        this.rating = movie.rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.year}. It received a rating of ${this.rating}.`;
    }
}

{
    const
        greenMile = {
            title: 'The Green Mile',
            director: 'Frank Darabont',
            genre: 'drama',
            year: 1999,
            rating: 8.6
        },
        ryan = {
            title: 'Saving Private Ryan',
            director: 'Steven Spielberg',
            genre: 'drama',
            year: 1998,
            rating: 8.6
        };
    const
        greenMileMovie = new Movie(greenMile),
        ryanMovie = new Movie(ryan);

    console.log(greenMileMovie.getOverview());
    console.log(ryanMovie.getOverview());
}