class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkOut) {
        this._isCheckedOut = checkOut;
    }

    toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);

        const lengthArr = ratings.length;

        return ratingsSum / lengthArr;
    }

    addRating(data) {
        this.ratings.push(data);
    }
}

class Book extends Media {
    constructor(author, title, pages, isCheckedOut) {
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    } 

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}