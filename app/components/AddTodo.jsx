const React = require('react');

const AddTodo = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        const text = this.refs.text.value;
        if(text.length>0 && text!==''){
            this.refs.text.value = '';
            this.props.addTodo(text);
        }else{
            this.refs.text.focus();
        }
    },
    render: function(){
       return (
        <div className="container__footer">
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="text" placeholder="Write your task"/>
                <button className="button expanded">Add Todo</button>
            </form>
        </div>
       );
    }
});

module.exports = AddTodo;