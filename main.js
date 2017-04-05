var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var president = BasicCard("Who is the first president of the United States?", "George Washington");
president["displayFront"]();

var presidentCloze = ClozeCard("George Washington is the first president of the United States.", "George Washington");
presidentCloze["cloze-deleter"]();