import { useState } from "react";
import catmain from "../../Image/main-cat.svg";
import eyeopen from "../../Image/symbol-defs.svg";
import eyeclose from "../../Image/symbol-defs.svg";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import {
  RegisterContainer,
  ColumnContainer,
  Cat,
  StyledForm,
  TitleRegister,
  DescRegister,
  RedirectContainer,
  RedirectTitle,
     RedirectDesc,
  StyledInputName,
  StyledInput,
  PositionContainer,
  StyledInputPassword,
     IconEyeButton,
     ConfirmPasswordContainer,
     ConfirmPassword,
  EyeButton,
  ButtonForm,
} from "./registration.styled";

const RegistrationComponent = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setOpenPassword((prev) => !prev);
  };

  const ToggleConfirmPasswordVisibility = () => {
    setIsOpenPassword((prev) => !prev);
  };

  return (
    <RegisterContainer>
      <ColumnContainer>
        <Cat src={catmain} alt="cat" />

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
              <TitleRegister>Registration</TitleRegister>
              <DescRegister>
                Thank you for your interest in our platform.
              </DescRegister>
              {/* Name */}
              <StyledInputName type="text" name="text" placeholder="Name" />
              {/* Email */}
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && errors.email}
              {/*Password  */}
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

              {/* Confirm password start */}
              <ConfirmPasswordContainer>
                <ConfirmPassword
                  type={isOpenPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Confirm password"
                />
                {errors.password && touched.password && errors.password}

                <EyeButton onClick={ToggleConfirmPasswordVisibility}>
                  {isOpenPassword ? (
                    <svg width="18" height="18">
                      <use href={`${eyeopen}#icon-eye`}></use>
                    </svg>
                  ) : (
                    <svg width="18" height="18">
                      <use href={`${eyeclose}#icon-eye-off`}></use>
                    </svg>
                  )}
                </EyeButton>
              </ConfirmPasswordContainer>

              {/* Button Form */}
              <ButtonForm type="submit" disabled={isSubmitting}>
                Registration
              </ButtonForm>
              {/* Confirm password start */}

              {/* Redirect start */}
              <RedirectContainer>
                <RedirectTitle>Already have an account?</RedirectTitle>
                <RedirectDesc>
                  <NavLink to="/login">Login</NavLink>
                </RedirectDesc>
              </RedirectContainer>
              {/* Redirect end */}
            </StyledForm>
          )}
        </Formik>
      </ColumnContainer>
    </RegisterContainer>
  );
};

export default RegistrationComponent;
