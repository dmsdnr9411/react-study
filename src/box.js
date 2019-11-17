import React from "react"; // 리액트를 불러옴
import styled, { css } from "styled-components";

const BaseBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

class Box extends React.PureComponent {
  state = {
    title: "",
    name: "",
    color: "red"
  };

  handleChange = ({ target: { name, value } }) => {
    //console.log(event.target.name, event.target.value);
    console.log("target", name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <input name="title" className="a" onChange={this.handleChange} />
        <input name="name" onChange={this.handleChange} />
        <input name="color" onChange={this.handleChange} />
        타이틀
        <div>{this.state.title}</div>
        이름
        <div>{this.state.name}</div>
        <BaseBox color={this.state.color}>박스 ...</BaseBox>
      </div>
    );
  }
}

export default Box;
