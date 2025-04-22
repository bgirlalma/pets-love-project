import React, { useEffect, useRef, useState } from "react";
import DogMobile from "../../Image/add-pet/dog-addpet-mobile.png";
import DogTablet from "../../Image/add-pet/dog-addpet-tablet.png";
import DogDesktop from "../../Image/add-pet/dog-addpet-desktop.png";
import { PetDefaultAvatar } from "../../Image/add-pet/pet-default-avatar";
import Healthicons from "../../Image/add-pet/symbol-defs.svg";

import {
  AddPetContainer,
  DogImageContainer,
    DogImage,
    MainTitle,
    FemaleBlockContainer,
  ButtonFemale,
  AvatarLinkContainer,
  LinkUpdateContainer,
  InputLink,
  ImageAvatarContainer,
} from "./addNewPet.styled";
import { Field, Form, Formik } from "formik";
import ButtonUploadComponent from "../Buttons/UploadButton/uploadButton";

const AddNewPetComponent = () => {
  const [imgSize, setImgSize] = useState("");
  // Pet upload Avatar
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadAvatar, setUploadAvatar] = useState<string>(null);

  // Pet Link
  // const petLink = `https://bgirlalma.github.io/pets-love-project/${petId}`;

  useEffect(() => {
    const updateImg = () => {
      if (window.innerWidth > 768) {
        setImgSize(DogTablet);
      } else if (window.innerWidth > 1280) {
        setImgSize(DogDesktop);
      } else {
        setImgSize(DogMobile);
      }
    };
    updateImg();

    window.addEventListener("resize", updateImg);

    return () => window.removeEventListener("resize", updateImg);
  }, []);

  // Pet Upload Avatar
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadAvatar(imageURL);
    }
  };

  return (
    <AddPetContainer>
      <DogImageContainer>
        <DogImage src={imgSize} alt="Dog" />
      </DogImageContainer>

      <div>
        <MainTitle>Add my pet</MainTitle>

        <FemaleBlockContainer>
          <ButtonFemale type="button">
            <svg width="20"  height="20">
              <use href={Healthicons + "#icon-female"}></use>
            </svg>
          </ButtonFemale>
          <ButtonFemale type="button">
            <svg width="20"  height="20">
              <use href={Healthicons + "#icon-male"}></use>
            </svg>
          </ButtonFemale>
          <ButtonFemale type="button">
            <svg width="20"  height="20">
              <use href={Healthicons + "#icon-healthicons"}></use>
            </svg>
          </ButtonFemale>
        </FemaleBlockContainer>
      </div>

      <AvatarLinkContainer>
        <ImageAvatarContainer>
          {uploadAvatar ? (
            <img src={uploadAvatar} alt="avatar" />
          ) : (
            <PetDefaultAvatar />
          )}
        </ImageAvatarContainer>

        <LinkUpdateContainer>
          <InputLink type="text" readOnly />
          <ButtonUploadComponent
            fileInputRef={fileInputRef}
            handleButtonClick={handleButtonClick}
            handleImageChange={handleImageChange}
          />
        </LinkUpdateContainer>
      </AvatarLinkContainer>

      <Formik>
        <Form>
          <Field type="" name="" value="" />
          <Field type="" name="" value="" />
          <Field type="" name="" value="" />
        </Form>
      </Formik>
    </AddPetContainer>
  );
};

export default AddNewPetComponent;
