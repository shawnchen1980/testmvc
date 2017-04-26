(function(){
	function Controller(model,view){
		this.model=model;
		this.view=view;

	}
	Controller.prototype.init=function(){
		var self=this;
		this.view.showTodos(this.model.readAll());
		this.view.bind("newItem",function(title){self.addTodo(title);});
		this.view.bind("delItem",function(id){self.removeTodo(id);});
		this.view.bind("toggleItem",function(id){self.toggleTodo(id);});
		this.view.bind("editItem",function(id){self.editTodo(id);});
		this.view.bind("editDoneItem",function(id,title){self.editDoneTodo(id,title);});
	};
	Controller.prototype.addTodo=function(title){
		this.model.addItem(title);
		this.view.showTodos(this.model.readAll());
	}
	Controller.prototype.removeTodo=function(id){
		this.model.removeItem(id);
		this.view.showTodos(this.model.readAll());
	}
	Controller.prototype.toggleTodo=function(id){
		this.model.toggleItem(id);
		this.view.showTodos(this.model.readAll());
	}
	Controller.prototype.editTodo=function(id){
		var todo=this.model.readOne(id);
		//alert(id);
		if (todo==null) return;
		console.log(id);
		this.view.editTodo(todo);
	}
	Controller.prototype.editDoneTodo=function(id,title){
		var todo=this.model.writeOne(id,title);
		if(todo==null) return;
		this.view.editDoneTodo(todo);
	}
	window.app=window.app||{};
	window.app.controller=window.app.controller||new Controller(window.app.model,window.app.view);
	window.app.controller.init();
})();