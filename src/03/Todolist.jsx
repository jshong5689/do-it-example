import React, { Component } from 'react';

class Todolist extends Component {
    render() {
        const todoList=[
            {taskName: '빨래하기', finisted: false},
            {taskName: '공부하기', finisted: true},
        ];
        return (
            <div>
                {todoList.map((todo)=><div key={todo.taskName}>{todo.taskName}</div>)}
            </div>
        );
    }
}

export default Todolist;