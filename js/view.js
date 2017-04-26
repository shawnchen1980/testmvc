(function(){
	function View(){
		this.ENTERKEY=13;
		this.ESCAPEKEY=27;
		this.todoList=document.querySelector("#todolist");
		this.newTodo=document.querySelector("#new-todo");
		var self=this;
		//this.todoList.onclick=function(event){alert(event.target.checked);}
		//this.newTodo.onkeypress=function(event){if (event.keyCode==self.ENTERKEY) alert(self.newTodo.value);};
	}
	View.prototype.bind=function(event,handler){
		var self=this;
		if(event=="newItem"){
			this.newTodo.addEventListener("keypress",function(e){
				if(e.keyCode==self.ENTERKEY) {
					if(self.newTodo.value.trim()=="")
						return;
					handler(self.newTodo.value.trim());

				}
			});
		}
		else if(event=="delItem"){
			this.todoList.addEventListener("click",function(e){
				if(e.target.id.slice(0,3)=="del") {
					handler(e.target.id.slice(3));
				}

			});
		}
		else if(event=="toggleItem"){
			this.todoList.addEventListener("click",function(e){
				if(e.target.id.slice(0,4)=="done") {
					handler(e.target.id.slice(4));
				}

			});
		}
		else if(event=="editItem"){
			this.todoList.addEventListener("dblclick",function(e){
				if(e.target.id.slice(0,4)=="todo") {
					handler(e.target.id.slice(4));
				}

			});
		}
		else if(event=="editDoneItem"){
			this.todoList.addEventListener("blur",function(e){
				if(e.target.id.slice(0,4)=="edit") {
					if(e.target.value.trim()!=""){
						handler(e.target.id.slice(4),e.target.value.trim());
					}
				}

			},true);
		}
	}
	View.prototype.editTodo=function(todo){
		var li=document.querySelector("#todo"+todo.id);
		var input=document.createElement("input");
		input.value=todo.title;
		input.id="edit"+todo.id;
		li.removeChild(li.firstChild);
		li.insertBefore(input,li.firstChild);
		input.focus();
		
	}
	View.prototype.editDoneTodo=function(todo){
		var li=document.querySelector("#todo"+todo.id);
		var title=document.createTextNode(todo.title);
		console.log(li.firstChild);
		li.removeChild(li.firstChild);

		li.insertBefore(title,li.firstChild);
		
	}	
	View.prototype.showTodos=function(todos){
		var inner="";
		todos.forEach(function(todo){
			var className=todo.completed?"completed":"";
			var checked=todo.completed?"checked":"";
			inner=inner+`<li id="todo${todo.id}" class="${className}">${todo.title} <button id="del${todo.id}">del</button> <label><input type="checkbox" id="done${todo.id}" ${checked}>done</label></li>`;
		})
		this.todoList.innerHTML=inner;
	};
	
	window.app=window.app||{}
	window.app.view = window.app.view || new View();
})();