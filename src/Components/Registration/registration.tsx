import {
  RegisterContainer,
  ColumnContainer,
  CatContainer,
  Cat,
  JackContainer,
  Jack,
  JackImageContainer,
  JackTitleContainer,
  NameTitle,
  DataTitle,
  DataSpan,
  DescJack,
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
import * as Yup from "yup";
import { useEffect, useState } from "react";
import catmain from "../../Image/userimg/main-cat.svg";
import catmaindesktop from "../../Image/userimg/main-cat-desktop.svg";
import eyeopen from "../../Image/symbol-defs.svg";
import eyeclose from "../../Image/symbol-defs.svg";
import CatJack from "../../Image/userimg/jack.png";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/userAuth/userOptions";
import { Notify } from "notiflix";
import { AppDispatch } from "../../Redux/store";

interface RegistrationValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationShema: Yup.ObjectSchema<RegistrationValues> = Yup.object({
  name: Yup.string()
    .min(3, "ваше ім'я занадто коротке!")
    .required("Це поле обов'язкове!"),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Некоректний формат email"
    )
    .required("Це поле обов'язкове!"),
  password: Yup.string()
    .min(7, "Пароль повинен бути більше 7 символів!")
    .required("Це поле обов'язкове!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають!") // 🔥 перевірка
    .required("Підтвердіть пароль!"),
});

const RegistrationComponent = () => {
  const [openPassword, setOpenPassword] = useState<boolean>(false);
  const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
  const [currentCatImage, setCurrentCatImage] = useState<string>(" ");

  const dispatch = useDispatch<AppDispatch>();

  const togglePasswordVisibility = (): void => {
    setOpenPassword((prev) => !prev);
  };

  const ToggleConfirmPasswordVisibility = (): void => {
    setIsOpenPassword((prev) => !prev);
  };

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth > 1280) {
        setCurrentCatImage(catmaindesktop);
      } else {
        setCurrentCatImage(catmain);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <RegisterContainer>
      <ColumnContainer>
        <CatContainer>
          <Cat src={currentCatImage} alt="cat" />
        </CatContainer>

        <JackContainer>
          <Jack>
            <JackImageContainer>
              <img src={CatJack} alt="" />
            </JackImageContainer>

            <div>
              <JackTitleContainer>
                <NameTitle>Jack</NameTitle>
                <DataTitle>
                  Birthday: <DataSpan>18.10.2021</DataSpan>
                </DataTitle>
              </JackTitleContainer>

              <DescJack>
                Jack is a gray Persian cat with green eyes. He loves to be
                pampered and groomed, and enjoys playing with toys.
              </DescJack>
            </div>
          </Jack>
        </JackContainer>

        <Formik<RegistrationValues>
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationShema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await dispatch(registerUser(values));
              resetForm();
              Notify.success("Успішно!");
            } catch {
              Notify.failure("Некоректно введені дані!");
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
              <TitleRegister>Registration</TitleRegister>
              <DescRegister>
                Thank you for your interest in our platform.
              </DescRegister>
              {/* Name */}
              <StyledInputName
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"
                $error={!!errors.name}
                $touched={!!touched.name}
              />
              {errors.name && touched.name && errors.name}
              {/* Email */}
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                $error={!!errors.email}
                $touched={!!touched.email}
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
                  $error={!!errors.password}
                  $touched={!!touched.password}
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
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Confirm password"
                  $error={!!errors.confirmPassword}
                  $touched={!!touched.confirmPassword}
                />
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}

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
