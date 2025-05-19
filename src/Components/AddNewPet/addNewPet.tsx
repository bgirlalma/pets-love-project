import React, { useEffect, useRef, useState } from "react";
import DogMobile from "../../Image/add-pet/dog-addpet-mobile.png";
import DogTablet from "../../Image/add-pet/dog-addpet-tablet.png";
import DogDesktop from "../../Image/add-pet/dog-addpet-desktop.png";
import { PetDefaultAvatar } from "../../Image/add-pet/pet-default-avatar";
import Healthicons from "../../Image/add-pet/symbol-defs.svg";
import WhiteGender from '../../Image/add-pet/symbol-white-defs.svg'
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import {
  AddPetContainer,
  DogImageContainer,
  DogImage,
  FormContainer,
  MainTitle,
  FemaleBlockContainer,
  ButtonFemale,
  PositionFormContainer,
  AvatarLinkContainer,
  LinkUpdateContainer,
  InputLink,
  ImageAvatarContainer,
  FormInfo,
  PositionContainer,
  DataContainer,
  SelectPositionContainer,
  TypeField,
} from "./addNewPet.styled";
import { Field, Form, Formik } from "formik";
import ButtonUploadComponent from "../Buttons/UploadButton/uploadButton";
import { CalendarIcon } from "../../Image/add-pet/calendarIcon";
import { ChevronDownIcon } from "../../Image/add-pet/chevron-down";
import DataCustomInput from "./customInputData/customInputData";
import AddPetButton from "./addPetButtons/addPetButtons";
import { useDispatch} from 'react-redux'
import { AddPet } from "../../Redux/pets/myPets/myPetsOptional";
import { AppDispatch } from "../../Redux/store";

const AddNewPetComponent = () => {
  // Resize Img
  const [imgSize, setImgSize] = useState("");
  // Pet upload Avatar
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // Avatar
  const [uploadAvatarFile, setUploadAvatarFile] = useState<File | null>(null);
  const [uploadAvatar, setUploadAvatar] = useState(null);
  // Calendar
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  // Add Pet
  const dispatch = useDispatch<AppDispatch>()
  const [sex, setSex] = useState<"male" | "female" | "unknown">("unknown");
 

  // Pet Link
  // const petLink = `https://bgirlalma.github.io/pets-love-project/${id}`;


  // Resize Image
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
      setUploadAvatarFile(file)
      const imageURL = URL.createObjectURL(file);
      setUploadAvatar(imageURL);
    }
  };

  // Функция для открытия календаря
  const handleOpenCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Открываем календарь
    }
  };



  return (
    <AddPetContainer>
      <DogImageContainer>
        <DogImage src={imgSize} alt="Dog" />
      </DogImageContainer>

      <FormContainer>
        <PositionFormContainer>
          <div>
            <MainTitle>Add my pet</MainTitle>

            <FemaleBlockContainer>
              <ButtonFemale
                genderType="female"
                isActive={sex === "female"}
                type="button"
                onClick={() =>
                  setSex((prev) => (prev === "female" ? "unknown" : "female"))
                }
              >
                <svg width="20" height="20" key={sex}>
                  <use
                    href={
                      sex === "female"
                        ? WhiteGender + "#icon-female"
                        : Healthicons + "#icon-female"
                    }
                  ></use>
                </svg>
              </ButtonFemale>
              <ButtonFemale
                genderType="male"
                isActive={sex === "male"}
                type="button"
                onClick={() =>
                  setSex((prev) => (prev === "male" ? "unknown" : "male"))
                }
              >
                <svg width="20" height="20">
                  <use
                    href={
                      sex === "male"
                        ? WhiteGender + "#icon-male"
                        : Healthicons + "#icon-male"
                    }
                  ></use>
                </svg>
              </ButtonFemale>
              <ButtonFemale
                genderType="unknown"
                isActive={sex === "unknown"}
                type="button"
                onClick={() =>
                  setSex((prev) => (prev === "unknown" ? "unknown" : "unknown"))
                }
              >
                <svg width="20" height="20">
                  <use
                    href={
                      sex === "unknown"
                        ? WhiteGender + "#icon-healthicons"
                        : Healthicons + "#icon-healthicons"
                    }
                  ></use>
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

          <Formik
            initialValues={{
              title: "",
              name: "",
              birthday: "",
              petType: "",
            }}
            onSubmit={(values, { resetForm }) => {
              const payload = {
                values: {
                  ...values,
                  birthday: startDate.toISOString().split("T")[0],
                },
                sex,
                file: uploadAvatarFile,
              };
              dispatch(AddPet(payload));
              resetForm();
              setUploadAvatar(null);
              setUploadAvatarFile(null);
              setSex("unknown");
            }}
          >
            <FormInfo>
              <Field type="text" name="title" placeholder="Title" />
              <Field type="text" name="name" placeholder="Pet’s Name" />
              <PositionContainer>
                <DataContainer>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    ref={datePickerRef}
                    customInput={
                      <DataCustomInput onClick={handleOpenCalendar} />
                    }
                    dateFormat="yyyy-MM-dd"
                    popperPlacement="bottom-start"
                    portal
                  />
                  <CalendarIcon />
                </DataContainer>
                <SelectPositionContainer>
                  <TypeField
                    as="select"
                    name="petType"
                    placeholder="Type of pet"
                  >
                    <option value="">Type of pet</option>
                    <option value="cat">cat</option>
                  </TypeField>
                  <ChevronDownIcon />
                </SelectPositionContainer>
              </PositionContainer>

              <AddPetButton />
            </FormInfo>
          </Formik>
        </PositionFormContainer>
      </FormContainer>
    </AddPetContainer>
  );
};

export default AddNewPetComponent;
