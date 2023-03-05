import {Todo} from './components/Todo';
import React from "react";

export class App extends React.Component {
    render() {
        return (
                <div>
                    <h1>My Todos react hot-reload</h1>
                    <Todo text='Class React' />
                </div>
                );
    }

}