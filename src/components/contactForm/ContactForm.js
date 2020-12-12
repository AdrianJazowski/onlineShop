/** @format */

import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import {
  StyledField,
  StyledErrorMessageWrapper,
  StyledForm,
  StyledH2,
} from "./ContactFormStyles";
import CustomButton from "../atoms/Button";

const contactFormSchema = Yup.object().shape({
  userName: Yup.string().required("enter your name!").min(3, "too short name"),
  userEmail: Yup.string().email("invalid email!").required("enter your email"),
  message: Yup.string()
    .required("enter your message")
    .min(5, "type a longer message"),
  acceptTerms: Yup.bool().oneOf([true], "accept terms!"),
});

const ContactForm = ({ texarea }) => {
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <StyledForm>
            <StyledH2>Contact form</StyledH2>
            <StyledField
              id="userName"
              name="userName"
              value={values.userName}
              type="text"
              placeholder="Type your name..."
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="userName" />
            </StyledErrorMessageWrapper>

            <StyledField
              id="userEmail"
              name="userEmail"
              value={values.userEmail}
              type="email"
              placeholder="Type your email..."
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="userEmail" />
            </StyledErrorMessageWrapper>

            <StyledField
              id="message"
              name="message"
              placeholder="type your message..."
              component="textarea"
              value={values.message}
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="message" />
            </StyledErrorMessageWrapper>

            <Field
              id="acceptTerms"
              name="acceptTerms"
              placeholder="type your acceptTerms..."
              type="checkbox"
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="acceptTerms" />
            </StyledErrorMessageWrapper>
            <CustomButton submitInForm type="submit">
              send
            </CustomButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
