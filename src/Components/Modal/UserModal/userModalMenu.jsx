import { useSelector } from "react-redux";
import user from "../../../Image/symbol-defs.svg";
import { selectedUserName } from "../../../Redux/userAuth/userSelector";
import { Form, Formik } from "formik";
import FavoritePets from "./favoritePets";
import { useState } from "react";
import EditInformation from "./editInformation";
import editIcon from "../../../Image/userimg/edit-profile.svg";

const ProfileModalMenu = () => {
  const currentUser = useSelector(selectedUserName);
  const [isOpenEditProfile, setIsEditProfile] = useState(false);

  const OpenProfile = () => {
    setIsEditProfile(true);
  };

  return (
    <div>
      <div>
        {/* user block */}
        <div>
          <h2>{currentUser}</h2>

          <svg>
            <use href={`${user}#icon-user`}></use>
          </svg>
        </div>

        {/* edit block */}
        <button type="button" onClick={OpenProfile}>
          <img src={editIcon } />
        </button>
      </div>

      {isOpenEditProfile && <EditInformation />}
      {/* edit block end */}

      {/* avatar */}
      <div></div>

      {/* form block */}
      <div>
        <h2>My information</h2>

        <Formik initialValues={{ name: "", email: "", phone: "" }}>
          <Form >
            <input type="name" name="name" />
            <input type="email" name="email" />
            <input type="number" name="number" />
          </Form>
        </Formik>
      </div>

      {/* pets block */}
      <div>
        <h2>My pets</h2>

        <button type="button">
          Add pets
          <svg>
            <use></use>
          </svg>
        </button>
      </div>

      {/* List Pets Block */}
      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      {/* Button LogOut */}
      <button type="button">Log Out</button>

      {/* Block Favorite Pets */}
      <FavoritePets />

      {/* Viewed Block */}
    </div>
  );
};

export default ProfileModalMenu;
