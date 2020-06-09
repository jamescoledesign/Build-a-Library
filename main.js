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
        if(this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else if(this._isCheckedOut === false) {
            this._isCheckedOut = true;
        }
    }
}
