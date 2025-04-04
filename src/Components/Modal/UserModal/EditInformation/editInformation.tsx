import React, { useRef, useState } from "react";
import { Field, Formik } from "formik";
import {
  EditInformationContainer,
  Overlay,
  PositionIconContainer,
  TitleEditProfile,
  ImageProfileContainer,
  ImageProfileUser,
  LinkUpdateContainer,
  InputLink,
  UploadImageIContainer,
  ButtonUpdateImg,
  FormContainer,
  ProfileGoToButton,
} from "./editInformation.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../../../../Redux/userAuth/userSelector";
import DefaulAvatar from "../../../../Image/userimg/default-avatar.jpg";

import { CloseSvg } from "../../../../Image/userimg/close";
import { UploadIcon } from "../../../../Image/userimg/upload-cloud";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { updateUserDataInFirestore } from "../../../../Redux/UserUpdate/userUpdateOptions";

interface Props {
  onClose: () => void;
}

interface FormikProps {
  uid: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

interface UpdateUserPayload {
  uid: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}
const EditInformation: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectedUser);
  const updateCurrentUser = useSelector(
    (state: RootState) => state.userUpdate.user
  );

  console.log("Updated User:", updateCurrentUser);
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadAvatar, setUploadAvatar] = useState(DefaulAvatar);

  const userProfileLink = `https://bgirlalma.github.io/pets-love-project/${
    currentUser?.name || "user"
  }`;

 const handleSubmit = async (updatedUser: UpdateUserPayload) => {
   if (!currentUser?.uid) {
     console.log("No user ID, stopping submit");
     return;
   }
   try {
     // Обновляем displayName в Firebase Authentication
     if (auth.currentUser) {
       await updateProfile(auth.currentUser, {
         displayName: updatedUser.name,
       });
     }

     // Обновляем данные в Firestore через Redux
     await dispatch(
       
       updateUserDataInFirestore(
         updatedUser
       )
     ).unwrap();

     

     // Локальное сохранение после успешного обновления в Firebase
     localStorage.setItem("userAuth", JSON.stringify(updatedUser));

     // Закрываем модалку
     onClose();
   } catch (error) {
     console.error("Error updating user data", error);
   }
 };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadAvatar(imageUrl);
    }
  };

  return (
    <>
      <Overlay />
      <EditInformationContainer>
        <PositionIconContainer onClick={onClose}>
          <CloseSvg />
        </PositionIconContainer>
        <TitleEditProfile>Edit information</TitleEditProfile>
        <ImageProfileContainer>
          <ImageProfileUser src={uploadAvatar} alt="default avatar" />
        </ImageProfileContainer>

        {/* block link and update img */}
        <LinkUpdateContainer>
          <InputLink type="text" value={userProfileLink} readOnly />
          <ButtonUpdateImg onClick={handleButtonClick}>
            Upload photo
            <UploadImageIContainer>
              <UploadIcon />
            </UploadImageIContainer>
          </ButtonUpdateImg>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </LinkUpdateContainer>

        {/* information inputs */}
        <Formik
          initialValues={{
            name: updateCurrentUser?.displayName || "",
            email: updateCurrentUser?.email || "",
            phone: updateCurrentUser?.phone || "",
          }}
          enableReinitialize
          onSubmit={(values) => {
            const updateUser = {
              uid: updateCurrentUser?.uid || "",
              name: values.name,
              email: values.email,
              phone: values.phone,
              avatar: uploadAvatar
            }
            handleSubmit(updateUser)
          }}
        >
          {({values, handleSubmit, handleChange}) => (
            <FormContainer onSubmit={handleSubmit}>
              <Field type="text" name="name" placeholder="Name" value={values.name } onChange={handleChange}/>
              <Field type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
              <Field type="text" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange}/>
              <ProfileGoToButton type="submit">Go to profile</ProfileGoToButton>
            </FormContainer>
          )}
        </Formik>
      </EditInformationContainer>
    </>
  );
};

export default EditInformation;
