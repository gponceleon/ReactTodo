const $ = require('jquery');

module.exports = {
    setTodos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        const stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {
            console.error(error.message);
        }

        return $.isArray(todos) ? todos : [];
        
    },
    filterTodos: function(todos, showCompleted, searchText){
        let filteredTodos = todos;
        //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=>!todo.completed || showCompleted);
        //filter by searchText
        if(searchText && searchText!=='' && searchText.length>0){
            filteredTodos = filteredTodos.filter(value=>value.text.toLowerCase().includes(searchText));
        }
        //sort todos with non-completed first
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1
            }else if(a.completed && !b.completed){
                return 1
            }else{
                return 0
            }
        });
        
        

        return filteredTodos;
    }
};