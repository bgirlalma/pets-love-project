import { useDispatch, useSelector } from "react-redux";
// import { selectedUser } from "../../../Redux/userAuth/userSelector";
import { Field, Formik } from "formik";
import { useState } from "react";
import EditInformation from "./EditInformation/editInformation";
import editIcon from "../../../Image/userimg/edit-profile.svg";
import defaultAvatar from '../../../Image/userimg/default-avatar.jpg'

import {
  MenuContainer,
  MainUserContainer,
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
  ViewedFavoriteContainer,
} from "./userModalMenu.styled";
import { UserWhiteIcon } from "../../../Image/userimg/user-white";
import { PlusPetsIcon } from "../../../Image/userimg/plus";
import FavoritePets from "../../ProfilePets/FavoritePets/favoritePets";
import ViewedComponent from "../../ProfilePets/Viewed/viewed";
import { logoutUser } from "../../../Redux/userAuth/userOptions";
import { setUserProfile } from "../../../Redux/userAuth/userSlice";
import { selectedUser } from "../../../Redux/userAuth/userSelector";

const ProfileModalMenu = () => {
  const displatch = useDispatch();
  // const currentUser = useSelector(selectedUser);
  const [isOpenEditProfile, setIsEditProfile] = useState(false);
  const currentUser = useSelector(selectedUser);

  const OpenProfile = () => {
    setIsEditProfile(true);
  };

  const closeProfile = () => setIsEditProfile(false);

  const handleLogout = () => {
    displatch(logoutUser());
  };

  const handleUpdateProfile = (values) => {
    displatch(setUserProfile(values));
  };

  return (
    <MenuContainer>
      <MainUserContainer>
        <UserBlockContainer>
          {/* user block */}
          <UserBlock>
            <UserBlockName>{currentUser.name}</UserBlockName>

            <UserWhiteIcon />
          </UserBlock>

          {/* edit block */}

          <EditButton
            type="button"
            onClick={OpenProfile}
            $OpenProfile={OpenProfile}
          >
            <img src={editIcon} />
          </EditButton>
        </UserBlockContainer>

        {isOpenEditProfile && <EditInformation onClose={closeProfile} />}
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
              name: currentUser?.name || "",
              email: currentUser?.email || "",
              phone: currentUser?.phone || "",
            }}
            enableReinitialize
            onSubmit={handleUpdateProfile}
          >
            <FormInformation>
              <Field type="text" name="name" placeholder="name" readOnly />
              <Field type="email" name="email" placeholder="email" readOnly />
              <Field
                type="text"
                name="phone"
                placeholder="phone"
                readOnly
              />
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
        <LogOutUserButton type="button" onClick={handleLogout}>
          Log Out
        </LogOutUserButton>
      </MainUserContainer>

      <ViewedFavoriteContainer>
        <FavoritePets />
        <ViewedComponent />
      </ViewedFavoriteContainer>
    </MenuContainer>
  );
};

export default ProfileModalMenu;
