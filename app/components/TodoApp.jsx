const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

const TodoList = require('TodoList');
const AddTodo=require('AddTodo');
const TodoSearch= require('TodoSearch');
const TodoApi = require('TodoApi');

const TodoApp = React.createClass({
    getInitialState: function(){
        return{
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate: function(){
        TodoApi.setTodos(this.state.todos);
    },
    handleToggle: function(id){
        const updatedTodos = this.state.todos.map((todo)=>{
            if(todo.id===id) {
                todo.completed= !todo.completed;
                todo.completedAt= todo.completed ?  moment().format('YYYY-MM-DD hh:m:ss')
                : undefined;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    },
    handleAddTodo: function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().format('YYYY-MM-DD hh:m:ss'),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch : function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function(){
        const { todos, showCompleted, searchText} = this.state;
        const filteredTodo = TodoApi.filterTodos(todos, showCompleted,searchText);
        return(<div>
            <h1 className="page-title"> Todo App</h1>
            <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">
                         <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList todos={filteredTodo} onToggle={this.handleToggle}/>
                        <AddTodo addTodo={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        </div>) 
    }
});

module.exports = TodoApp;