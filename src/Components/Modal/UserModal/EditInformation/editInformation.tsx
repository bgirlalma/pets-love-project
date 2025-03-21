import React from "react";
import { Formik } from "formik";
import {
  EditInformationContainer,
  Overlay,
  TitleEditProfile,
  ImageProfileContainer,
  ImageProfileUser,
  FormContainer,
  ProfileGoToButton,
} from "./editInformation.styled";
import { useSelector } from "react-redux";
import { selectedUser } from "../../../../Redux/userAuth/userSelector";
import DefaulAvatar from "../../../../Image/userimg/default-avatar.jpg";

interface Props {
  OpenProfile: boolean
}

interface FormikProps {
  name: string;
  email: string;
  phone: number;
}
const EditInformation: React.FC<Props> = ({ OpenProfile }) => {
  const currentUser = useSelector(selectedUser)

  const handleSubmit = (values: FormikProps) => {
    console.log("Submit Props")
  }

  return (
    <>
      <Overlay />
      <EditInformationContainer>
        <TitleEditProfile>Edit information</TitleEditProfile>
        <ImageProfileContainer>
          <ImageProfileUser src={DefaulAvatar} alt="defaul avatar" />
        </ImageProfileContainer>

        {/* block Link and Update img */}
        <div></div>
        <Formik
          initialValues={{
            name: currentUser?.displayName || "",
            email: currentUser?.email || "",
            phone: currentUser?.phone || "",
          }}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          <FormContainer>
            <input type="name" name="name" value={currentUser?.displayName}/>
            <input type="email" name="email" value={currentUser?.email}/>
            <input type="number" name="number" value={currentUser?.phone}/>
          </FormContainer>
        </Formik>

        <ProfileGoToButton type="submit">Go to profile</ProfileGoToButton>
      </EditInformationContainer>
    </>
  );
};

export default EditInformation;