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
import { UpdateUserData } from "../../../../Redux/UserUpdate/userUpdateOptions";
import { AppDispatch } from "../../../../Redux/store";

interface Props {
  onClose: () => void
};

interface FormikProps {
  name: string;
  email: string;
  phone: number;
}
const EditInformation: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>()
  const currentUser = useSelector(selectedUser);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadAvatar, setUploadAvatar] = useState(DefaulAvatar);

  const userProfileLink = `https://bgirlalma.github.io/pets-love-project/${
    currentUser?.displayName || "user"
  }`;

  const handleSubmit = async (values) => {
    const userData = {
      userId: currentUser.id, // ID пользователя
      updatedData: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        avatar: uploadAvatar, // Новое изображение
      },
    };

    // Обновляем данные в Firebase
    await dispatch(UpdateUserData(userData));

    // Закрываем модалку после обновления
    onClose();
  };

  // Открытие файлового диалога при клике на кнопку
  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Клик по скрытому input[type="file"]
  };

  // Обработчик изменения изображения
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Создание URL для изображения
      setUploadAvatar(imageUrl); // Обновление аватара
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
            <ImageProfileUser src={uploadAvatar} alt="defaul avatar" />
          </ImageProfileContainer>

          {/* block link and update img  */}
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
              name: currentUser?.displayName || "",
              email: currentUser?.email || "",
              phone: currentUser?.phone || "",
            }}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            <FormContainer>
              <Field type="name" name="name"  />
              <Field type="email" name="email"  />
              <Field type="number" name="number" />
            </FormContainer>
          </Formik>

          <ProfileGoToButton type="submit">Go to profile</ProfileGoToButton>
        </EditInformationContainer>
    </>
  );
};

export default EditInformation;