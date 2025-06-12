import { Component } from "react";

// export default class Hello extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             count: 0
//         }
//     }

//     handleIncrementClick = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     handleDecrementClick = () => {
//         this.setState({count: this.state.count - 1})
//     }
    
//   render() {
//     return (
//       <>
//         <h1>Counter's number is</h1>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleIncrementClick}>Increment</button>
//         <button onClick={this.handleDecrementClick}>Decrement</button>
//       </>
//     );
//   }
// }

export default class SecretMessage  extends Component {
  constructor(props){
    super(props)
    this.state = {
      isVisible: true
    }
  }
ShowOrDissapear = () => {
  this.state.isVisible({isVisible: !this.state.isVisible});
}



    render() {
      


    return (
      <>
        <h1>Temprature</h1>
        <p>{this.state.count}</p>
        <h2>Секретне повідомлення</h2>
        <button onClick={this.ShowOrDissapear}>Показати/Сховати</button>
      </>
    );
  }
}