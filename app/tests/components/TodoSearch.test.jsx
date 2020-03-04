const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch',()=>{
    it('should exist',()=>{
        expect(TodoSearch).toExist();
    });

    it('should call onSearch will entered input text',()=>{
        const spy = expect.createSpy();
        const searchText = 'search';
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
        
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false,searchText);
    });

    it('should call onSearch will proper checked value',()=>{
        const spy = expect.createSpy();
        const showCompleted = true;
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(showCompleted,'');
    });
});