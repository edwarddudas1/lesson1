import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 75px;
  height: 50px;
  border-radius: 5px;
  border-color: dark grey;
  color: black;
`;
const Span = styled.span`
font-size: 17px;
`;
const Input =styled.input`
padding-top: 20px;
`;
export default class TodoItem extends React.Component {
  render() {
    const { id, text, completed, onToggleCompleted, onDelete } = this.props;
    return (
      <div>
        <Input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <Span>{text}</Span>
        <Button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    );
  }
}
