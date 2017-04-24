(function(){
	function Controller(model,view){
		this.model=model;
		this.view=view;
	}
	Controller.prototype.init=function(){
		this.view.showTodos(this.model.readAll());
	};
	window.app=window.app||{};
	window.app.controller=window.app.controller||new Controller(window.app.model,window.app.view);
	window.app.controller.init();
})();