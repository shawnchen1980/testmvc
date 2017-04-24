(function(){
	function Model(name){
		this.data={
			todos:[]
		};
	}
	Model.prototype.init=function(){
		this.data.todos.push({id:1,title:"say something"});
		this.data.todos.push({id:2,title:"see something"});
		this.data.todos.push({id:3,title:"eat something"});
	};
	Model.prototype.readAll=function(){
		return this.data.todos;
	}
	window.app=window.app || {};
	window.app.model=window.app.model || new Model("hello");
	window.app.model.init();
})();