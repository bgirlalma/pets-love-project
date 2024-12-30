import {
  LoginContainer,
  ColumnContainer,
  Dog,
  StyledForm,
  TitleLogin,
  DescLogin,
  StyledInput,
  PositionContainer,
  StyledInputPassword,
  IconEyeButton,
  ButtonForm,
  RedirectContainer,
  RedirectTitle,
  RedirectDesc,
} from "./login.styled";
import maindog from "../../Image/main-dog.svg";
import { Formik } from "formik";
import eyeclose from "../../Image/symbol-defs.svg";
import eyeopen from "../../Image/symbol-defs.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  const [openPassword, setOpenPassword] = useState(false);

  const togglePasswordVisibility = () => {
  setOpenPassword((prev) => !prev)
  }; 

  return (
    <LoginContainer>
      <ColumnContainer>
        <Dog src={maindog} alt="dog" />

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <TitleLogin>Login</TitleLogin>
              <DescLogin>
                Welcome! Please enter your credentials to login to the platform:
              </DescLogin>
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && errors.email}
              <PositionContainer>
                <StyledInputPassword
                  type={openPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                <IconEyeButton onClick={togglePasswordVisibility}>
                  {openPassword ? (
                    <svg width="18" height="18">
                      <use href={`${eyeopen}#icon-eye`}></use>
                    </svg>
                  ) : (
                    <svg width="18" height="18">
                      <use href={`${eyeclose}#icon-eye-off`}></use>
                    </svg>
                  )}
                </IconEyeButton>
              </PositionContainer>
              {errors.password && touched.password && errors.password}
              <ButtonForm type="submit" disabled={isSubmitting}>
                LOG IN
              </ButtonForm>

              <RedirectContainer>
                <RedirectTitle>Don’t have an account?</RedirectTitle>
                <RedirectDesc>
                  <NavLink to="/registration">Register</NavLink>
                </RedirectDesc>
              </RedirectContainer>
            </StyledForm>
          )}
        </Formik>
      </ColumnContainer>
    </LoginContainer>
  );
};

export default LoginComponent;
