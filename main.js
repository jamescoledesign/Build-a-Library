class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return.this._title;
    }

    get isCheckedOut() {
        return.this._isCheckedOut;
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
}
