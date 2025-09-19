import React, { Component } from "react";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      console.log(this.state.isOpen ? "Модалка відкрита" : "Модалка закрита");
    }
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape" && this.state.isOpen) {
      this.closeModal();
    }
  };

  render() {
    const { isOpen } = this.state;

    return(
        <>
        <div>
            <button onClick={this.openModal}>Відкрити</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Модальне вікно</p>
                        <button onClick={this.closeModal}>Закрити</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
  }
}

export default Modal;