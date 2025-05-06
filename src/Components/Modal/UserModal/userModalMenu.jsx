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
  WrappContainer,
  TitleInformation,
  FormInformation,
  PetsContainer,
  PetsWrappContainer,
  PetsTitle,
  ButtonAddPets,
  PetsListContainer,
  LogOutUserButton,
  ViewedFavoriteContainer,
  FavoritePetsContainer,
  TitleFavoritePets,
} from "./userModalMenu.styled";
import { UserWhiteIcon } from "../../../Image/userimg/user-white";
import { PlusPetsIcon } from "../../../Image/userimg/plus";
import FavoritePets from "../../ProfilePets/FavoritePets/favoritePets";
import ViewedComponent from "../../ProfilePets/Viewed/viewed";
import { logoutUser } from "../../../Redux/userAuth/userOptions";
import { setUserProfile } from "../../../Redux/userAuth/userSlice";
import { selectedUser } from "../../../Redux/userAuth/userSelector";
import { NavLink } from "react-router-dom";

const ProfileModalMenu = () => {
  const displatch = useDispatch();
  const [isOpenEditProfile, setIsEditProfile] = useState(false);
  // const [showListFavoritePets, setShowListFavoritePets] = useState()
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
          <WrappContainer>
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
                <Field type="text" name="phone" placeholder="phone" readOnly />
              </FormInformation>
            </Formik>
          </WrappContainer>
        </InformationContainer>

        {/* pets block */}
        <PetsContainer>
          <PetsWrappContainer>
            <PetsTitle>My pets</PetsTitle>

            <ButtonAddPets type="button">
              <NavLink to="/add-pet">Add Pet</NavLink>
              <PlusPetsIcon />
            </ButtonAddPets>
          </PetsWrappContainer>
        </PetsContainer>

        {/* List Pets Block */}
        <PetsListContainer>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>

          {/* Button LogOut */}
          <LogOutUserButton type="button" onClick={handleLogout}>
            Log Out
          </LogOutUserButton>
        </PetsListContainer>
      </MainUserContainer>

      <ViewedFavoriteContainer>
        <FavoritePets />
        <ViewedComponent />

        <FavoritePetsContainer>
          <TitleFavoritePets>
            Oops, <span>looks like there are not any furries</span> on our
            adorable page yet. Do not worry! View your pets on the find your
            favorite pet page and add them to your favorites.
          </TitleFavoritePets>
        </FavoritePetsContainer>
      </ViewedFavoriteContainer>
    </MenuContainer>
  );
};

export default ProfileModalMenu;
