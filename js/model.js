(function(){
	function Todo(id,title){
		this.id=id;
		this.title=title;
		this.completed=false;
	}
	function Model(name){
		this.data={
			todos:[]
		};
	}
	Model.prototype.init=function(){
		this.data.todos.push(new Todo(1,"say something"));
		this.data.todos.push(new Todo(2,"see something"));
		this.data.todos.push(new Todo(3,"eat1 something"));
	};
	Model.prototype.readAll=function(){
		return this.data.todos;
	}
	Model.prototype.readOne=function(id){
		for (var i = this.data.todos.length - 1; i >= 0; i--) {
			if(this.data.todos[i].id==id) {
				return this.data.todos[i];
			}
		}
		return null;
	}
	Model.prototype.writeOne=function(id,title){
		for (var i = this.data.todos.length - 1; i >= 0; i--) {
			if(this.data.todos[i].id==id) {
				this.data.todos[i].title=title;
				return this.data.todos[i];
			}
		}
		return null;
	}
	Model.prototype.addItem=function(title){
		this.data.todos.push(new Todo((new Date()).getTime(),title));
		return this.data.todos[this.data.todos.length-1];
	}
	Model.prototype.removeItem=function(id){
		for (var i = this.data.todos.length - 1; i >= 0; i--) {
			if(this.data.todos[i].id==id)
				break;
		}
		if(i>=0){
			this.data.todos.splice(i,1);
		}
	}
	Model.prototype.toggleItem=function(id){
		for (var i = this.data.todos.length - 1; i >= 0; i--) {
			if(this.data.todos[i].id==id)
				break;
		}
		if(i>=0){
			this.data.todos[i].completed=!this.data.todos[i].completed;
		}
	}
	window.app=window.app || {};
	window.app.model=window.app.model || new Model("hello");
	window.app.model.init();
})();