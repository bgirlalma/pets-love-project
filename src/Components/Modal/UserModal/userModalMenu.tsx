import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
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
  LogOutUserButton,
  ViewedFavoriteContainer,
  ButtonFlexContainer,
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
import { data, NavLink } from "react-router-dom";
import ShowListMyPetsComponent from "../../AddNewPet/ShowListMyPets/showListMyPets";
import FavoritePetsList from "../../ProfilePets/FavoritePets/FavoritePetList/favoritePetList";
import { Notify } from "notiflix";


const ProfileModalMenu = () => {
  const displatch = useDispatch();
  const [isOpenEditProfile, setIsEditProfile] = useState(false);
  // const [showListFavoritePets, setShowListFavoritePets] = useState()
  const currentUser = useSelector(selectedUser);

  const [showFavoriteList, setShowFavoriteList] = useState(true)
  

  const OpenProfile = () => {
    setIsEditProfile(true);
  };

  const closeProfile = () => setIsEditProfile(false);

  const handleLogout = () => {
    displatch(logoutUser());
  };

  const handleUpdateProfile = (values: any) => {
    displatch(setUserProfile(values));
  };

  const handleClickFavoriteButton = () => {
      if (data.length === 0) {
        Notify.info("You don't have favorite pets yet!")
        return;
      }
      setShowFavoriteList(true);
  }

  const noFavorites = data.length < 1

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
        <div>
          <div>
            <ShowListMyPetsComponent />
          </div>

          {/* Button LogOut */}
          <LogOutUserButton type="button" onClick={handleLogout}>
            Log Out
          </LogOutUserButton>
        </div>
      </MainUserContainer>

      <ViewedFavoriteContainer>
        <ButtonFlexContainer>
          <FavoritePets handleClickFavoriteButton={handleClickFavoriteButton} />
          <ViewedComponent />
        </ButtonFlexContainer>

        <FavoritePetsContainer>
          {showFavoriteList && <FavoritePetsList />}

          {noFavorites && (
            <TitleFavoritePets>
              Oops, <span>looks like there are not any furries</span> on our
              adorable page yet. Do not worry! View your pets on the find your
              favorite pet page and add them to your favorites.
            </TitleFavoritePets>
          )}
        </FavoritePetsContainer>
      </ViewedFavoriteContainer>
     
    </MenuContainer>
  );
};

export default ProfileModalMenu;
