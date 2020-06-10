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
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut);
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
