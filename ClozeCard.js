var ClozeCard = function(text, cloze) {
    this["text"] = text;
    this["cloze"] = cloze;
};

ClozeCard.prototype["partial"] = null;

ClozeCard.prototype["cloze-deleter"] = function(){
    if (this["text"].includes(this["cloze"])) {
        this["partial"] = this["text"].replace(this["cloze"], ". . .")
        console.log(this["partial"])
    }
    else {
        console.log("that ain't right");
    }
}

module.exports = ClozeCard;