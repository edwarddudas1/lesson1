import { Component } from "react";

export default class TodoEditor extends Component {
    state={
        textValue: '',
    }
    render(){return(
        <form>
            <input type="text" />
            <button>Додати</button>
        </form>
    )}
}