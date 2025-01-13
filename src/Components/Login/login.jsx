import {
  LoginContainer,
  ColumnContainer,
  DogContainer,
  Dog,
  RichContainer,
  Rich,
  RichImageContainer,
  RichTitleContainer,
  NameTitle,
  DataTitle,
  DataSpan,
  DescRich,
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
import maindog from "../../Image/userimg/main-dog.svg";
import maindogdesktop from "../../Image/userimg/main-dog-desktop.svg";
import eyeclose from "../../Image/symbol-defs.svg";
import eyeopen from "../../Image/symbol-defs.svg";
import { useEffect, useState } from "react";
import DogRich from "../../Image/userimg/rich.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/userAuth/userOptions";
import { Notify } from "notiflix";

const LoginComponent = () => {
  const [openPassword, setOpenPassword] = useState(false);
  const [currentDogImage, setCurrentDogImage] = useState(" ");
  const dispatch = useDispatch()
  const navigate = useNavigate()

    useEffect(() => {
      const updateImage = () => {
        if (window.innerWidth > 1280) {
          setCurrentDogImage(maindogdesktop);
        } else {
          setCurrentDogImage(maindog);
        }
      };
      updateImage();
      window.addEventListener("resize", updateImage);

      return () => window.removeEventListener("resize", updateImage);
    }, []);

  const togglePasswordVisibility = () => {
    setOpenPassword((prev) => !prev);
  };


  return (
    <LoginContainer>
      <ColumnContainer>
        <DogContainer>
          <Dog src={currentDogImage} alt="dog" />
        </DogContainer>

        <RichContainer>
          <Rich>
            <RichImageContainer>
              <img src={DogRich} alt="" />
            </RichImageContainer>

            <div>
              <RichTitleContainer>
                <NameTitle>Rich</NameTitle>
                <DataTitle>
                  Birthday: <DataSpan>21.09.2020</DataSpan>
                </DataTitle>
              </RichTitleContainer>

              <DescRich>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!
              </DescRich>
            </div>
          </Rich>
        </RichContainer>

        <Formik
          initialValues={{ email: "", password: "" }}
          
          onSubmit={ async(values, { resetForm }) => {
           try {
             await dispatch(loginUser(values)).unwrap()
             resetForm()
            
             Notify.success("Успішно!")
              navigate("/home");
           } catch (error) {
            Notify.failure("Email або Пароль введенно не вірно!")
           }
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
