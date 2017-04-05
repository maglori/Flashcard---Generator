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
        console.log(this["partial"])
    } else {
        console.log("that ain't right");
    }
};

module.exports = ClozeCard;