(function(){
	function View(){
		this.todoList=document.querySelector("#todolist");
	}
	View.prototype.showTodos=function(todos){
		var inner="";
		todos.forEach(function(todo){
			inner=inner+'<li id="todo'+todo.id+'">'+todo.title+'</li>';
		})
		this.todoList.innerHTML=inner;
	};
	window.app=window.app||{}
	window.app.view = window.app.view || new View();
})();