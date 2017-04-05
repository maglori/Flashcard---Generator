var BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
        this["front"] = front;
        this["back"] = back;
    } else {
        return new BasicCard(front, back)
    }
};

BasicCard.prototype["displayFront"] = function () {
     console.log(this["front"])
}

BasicCard.prototype["displayBack"] = function () {
     console.log(this["back"])
}

module.exports = BasicCard;