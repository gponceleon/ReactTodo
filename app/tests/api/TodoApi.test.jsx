const expect=require('expect');
const TodoApi = require('TodoApi');

describe('TodoApi',()=>{
    it('should exist',()=>{
        expect(TodoApi).toExist();
    });

    describe('setTodo',()=>{
        beforeEach(()=>{
            localStorage.removeItem('todos')
        });

        it('should save in LocalStore with valid data',()=>{
            const todos = [{
                id:1,
                text: 'task1',
                completed: false
            }];

            TodoApi.setTodos(todos);
            const actual = JSON.parse(localStorage.getItem('todos'));

            expect(actual).toEqual(todos);
            
        });

        it('should not save in LocalStore with invalid data',()=>{
            const todos = {
                id:1,
                text: 'task2',
                completed: false
            };

            TodoApi.setTodos(todos);
            const actual = JSON.parse(localStorage.getItem('todos'));

            expect(actual).toEqual(null);
        });
    });

    describe('getTodo',()=>{
        it('should return empty array if todos if an array',()=>{
            localStorage.setItem('todos','a');
            const actualTodos = TodoApi.getTodos();
            expect(actualTodos.length).toBe(0);
        });

        it('should return data if todos if an array',()=>{
            const todos = [{
                id:1,
                text: 'task2',
                completed: false
            }];
            
            localStorage.setItem('todos',JSON.stringify(todos));
            const actualTodos = TodoApi.getTodos();
            expect(actualTodos.length).toBe(1);
        });
    });

    describe('filtered todos',()=>{
        let todos =[{
            id:1,
            text: 'Some text',
            completed: true
        },
        {
            id:2,
            text: 'Some text2',
            completed: false
        },
        {
            id:3,
            text: 'Some text3',
            completed: true
        }];

        it('should return all item is showCompleted is true',()=>{
            const filteredTodos = TodoApi.filterTodos(todos, true,'');
            expect(filteredTodos.length).toBe(3);

        });

        it('should return all item is showCompleted is false',()=>{
            const filteredTodos = TodoApi.filterTodos(todos, false,'');
            expect(filteredTodos.length).toBe(1);

        });

        it('should sort by completed status',()=>{
            let filteredTodos =TodoApi.filterTodos(todos, true,'');
            expect(filteredTodos.length).toBe(3)
            expect(filteredTodos[0].id).toBe(2)
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should show only one todo if filtered by the text 2',()=>{
            const filteredTodos = TodoApi.filterTodos(todos, true,'2');
            expect(filteredTodos.length).toBe(1);
            expect(filteredTodos[0].id).toBe(2);
        });

        it('should show all item if searchText is eq to empty string',()=>{
            const filteredTodos = TodoApi.filterTodos(todos, true,'');
            expect(filteredTodos.length).toBe(3);
        });
    });
});