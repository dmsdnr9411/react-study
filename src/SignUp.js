import React from "react";
import styled from "styled-components";

const SignUpText = styled.label`
  display: inline-block;
  width: 80px;
`;

class SignUp extends React.PureComponent {
  info = () => {
    const member = document.getElementsByTagName("input");

    alert(
      member[0].name +
        " " +
        member[0].value +
        "\n" +
        member[1].name +
        " " +
        member[1].value +
        "\n" +
        member[2].name +
        " " +
        member[2].value
    );
  };

  render() {
    return (
      <div>
        <SignUpText>이메일 </SignUpText>
        <input name="이메일" />
        <br />
        <SignUpText>비밀번호 </SignUpText>
        <input name="비밀번호" type="password" />
        <br />
        <SignUpText>이름 </SignUpText>
        <input name="이름" type="text" />
        <br />
        <button onClick={this.info}>완료</button>
      </div>
    );
  }
}

export default SignUp;
