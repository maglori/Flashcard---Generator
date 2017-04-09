var ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard){
        this["text"] = text;
        this["cloze"] = cloze;
        this["partial"] = null;
    } else {
        return new ClozeCard(text, cloze)
    }
};

ClozeCard.prototype["cloze-deleter"] = function(){
    if (this["text"].includes(this["cloze"])) {
        this["partial"] = this["text"].replace(this["cloze"], ". . .")
        console.log("Question: " + this["partial"]);
        console.log("Answer: " + this["cloze"]);
    } else {
        console.log("That ain't right");
    }
};

module.exports = ClozeCard;