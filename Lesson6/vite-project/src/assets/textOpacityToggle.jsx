import { Component } from "react";

export default class OpacityToggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true
        }
    }

    ShowText = () => {
        
    }


    render() {
        return(
            <>
            <h1>Secret message</h1>
            <button onClick={this.ShowText}>Show/disappear</button>

            </>
        );
    }
}