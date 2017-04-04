var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var president = new BasicCard("Who is the first president of the United States?", "George Washington");

president["displayFront"]();

var presidentCloze = new ClozeCard("George Washington is the first president of the United States.", "bah humbug");

presidentCloze["cloze-deleter"]();