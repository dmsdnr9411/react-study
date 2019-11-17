import React from "react";
//import styled from "styled-components";

const sizeProp = {
  mini: "12px",
  tiny: "13px",
  small: "14px",
  medium: "15px",
  large: "16px",
  big: "19px",
  huge: "21px",
  massive: "24px"
};

function Text({ size }) {
  for (var i in sizeProp) {
    if (size === i) {
      var result = sizeProp[i];
    }
  }

  return <p style={{ fontSize: result }}>텍스트 컴퍼넌트 과제</p>;
}

export default Text;
