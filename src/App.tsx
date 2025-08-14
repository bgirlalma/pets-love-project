import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import LoginPage from "./Pages/LoginPage/login"
import RegistrationPage from "./Pages/RegistrationPage/registration"
import NewsPage from "./Pages/NewsPage/news"
import ScreensaverPage from "./Pages/ScreensaverPage/screensaverPage"
import HomePage from "./Pages/HomePage/homePage"
import  PrivateRouter from "./PrivateRouter"
import ProfileModalMenu from "./Components/Modal/UserModal/userModalMenu"
import AddNewPetPage from "./Pages/AddNewPetPage/addNewPetPage"
import NoticesPage from "./Pages/NoticesPage/noticesPage"
import FriendsPage from "./Pages/FriendsPage/friendsPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ScreensaverPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          {/* Private Router start */}
          <Route
            path="/home"
            element={
              <PrivateRouter redirectTo="/login" component={HomePage} />
            }
          />
          <Route path="/profile" element={<PrivateRouter redirectTo="/login" component={ProfileModalMenu} />} />
          
          <Route path="/add-pet" element={<PrivateRouter redirectTo="/login" component={AddNewPetPage}/> } />
          {/* Private Router end */}
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage/> } />
          <Route path="/friends" element={<FriendsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
