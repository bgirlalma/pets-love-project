import { useSelector } from "react-redux";
import { selectedUser } from "../../../Redux/userAuth/userSelector";
import { Formik } from "formik";
import { useState } from "react";
import EditInformation from "./editInformation";
import editIcon from "../../../Image/userimg/edit-profile.svg";
import defaultAvatar from '../../../Image/userimg/default-avatar.jpg'

import {
  MenuContainer,
  UserBlockContainer,
  UserBlock,
  UserBlockName,
  EditButton,
  AvatarContainer,
  DefaultImgAvatar,
  InformationContainer,
  TitleInformation,
  FormInformation,
  PetsContainer,
  PetsTitle,
  ButtonAddPets,
  LogOutUserButton,

} from "./userModalMenu.styled";
import { UserWhiteIcon } from "../../../Image/userimg/user-white";
import { PlusPetsIcon } from "../../../Image/userimg/plus";

const ProfileModalMenu = () => {
  const currentUser = useSelector(selectedUser);
  const [isOpenEditProfile, setIsEditProfile] = useState(false);

  const OpenProfile = () => {
    setIsEditProfile(true);
  };

  return (
    <MenuContainer>
      <UserBlockContainer>
        {/* user block */}
        <UserBlock>
          <UserBlockName>{currentUser.displayName}</UserBlockName>

          <UserWhiteIcon />
        </UserBlock>

        {/* edit block */}
        <EditButton type="button" onClick={OpenProfile}>
          <img src={editIcon} />
        </EditButton>
      </UserBlockContainer>

      {isOpenEditProfile && <EditInformation />}
      {/* edit block end */}

      {/* avatar */}
      <AvatarContainer>
        <DefaultImgAvatar
          src={defaultAvatar}
          alt="default avatar"
          width="94"
          height="94"
        />
      </AvatarContainer>

      {/* information form block */}
      <InformationContainer>
        <TitleInformation>My information</TitleInformation>

        <Formik
          initialValues={{
            name: currentUser?.displayName || "",
            email: currentUser?.email || "",
            phone: currentUser?.phone || "",
          }}
          enableReinitialize
        >
          <FormInformation>
            <input type="name" name="name" placeholder="name" value={currentUser?.displayName || ""} readOnly/>
            <input type="email" name="email" placeholder="email" value={currentUser?.email || ""} readOnly/>
            <input type="number" name="number" placeholder="number" value={currentUser?.phone || ""} readOnly/>
          </FormInformation>
        </Formik>
      </InformationContainer>

      {/* pets block */}
      <PetsContainer>
        <PetsTitle>My pets</PetsTitle>

        <ButtonAddPets type="button">
          Add pets
          <PlusPetsIcon />
        </ButtonAddPets>
      </PetsContainer>

      {/* List Pets Block */}
      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      {/* Button LogOut */}
      <LogOutUserButton type="button">Log Out</LogOutUserButton>
    </MenuContainer>
  );
};

export default ProfileModalMenu;
