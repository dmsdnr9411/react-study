import React from "react";
import styled from "styled-components";

// 1.class 방식
// class Input extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// 2.class 방식
// class Input extends React.PureComponent {
//   render() {
//     return <input />;
//   }
// }

//3
// function Input() {
//   return <input />;
// }

const Input = styled.input`
  width: 100%;
  height: 100px;
  padding: 15px 5px;
  background-color: red;
`;

export default Input;
