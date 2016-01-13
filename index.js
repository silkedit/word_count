const silkedit = require('silkedit')

module.exports = {
	activate: function() {
	},

	commands: {
		"word_count": function() {
			var text = silkedit.API.activeTextEditView().text()
			if (text !== undefined) {
				var count = text.split(" ").filter(function(elem){ return elem !== ""; }).length
				silkedit.API.alert(silkedit.t("word_count:word_count", "word count") + ": " + count)
			} else {
				console.log("text is undefined")
			}
		}
	}
}
