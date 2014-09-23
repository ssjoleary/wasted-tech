var indexViewModule = (function (indexViewModule) {
	indexViewModule.indexViewModel = function() {
		var self = this;
		self.title = ko.observable("sammy");	
	};

	return indexViewModule;
}(indexViewModule || {}));