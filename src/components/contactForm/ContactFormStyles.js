/** @format */

import { Field, Form } from "formik";
import styled, { css } from "styled-components";

export const StyledForm = styled(Form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 70vh;
  background: rgba(0, 0, 0, 0.8);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 1px solid #c5ecfd;
  outline: none;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  ${({ textarea }) =>
    textarea &&
    css`
      border: 2px solid #c5ecfd;
      resize: none;
      height: 200px;
    `}
`;
export const StyledH2 = styled.h2`
  color: #c5ecfd;
  text-align: center;
  margin-bottom: 25px;
`;

export const StyledErrorMessageWrapper = styled.div`
  color: crimson;
  margin: 5px 0;
`;
