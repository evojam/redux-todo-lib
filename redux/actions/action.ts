import { Action } from 'redux';

export enum ActionType {
    AddTodo,
    AddTodoList,
    ChooseTodoList,
    RemoveTodo,
    RemoveTodoList,
    ToggleTodo,
    SetFilter
}

export interface IAppAction extends Action {
    type: ActionType;
}
