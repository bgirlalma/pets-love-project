import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./Pages/LoginPage/login";
import RegistrationPage from "./Pages/RegistrationPage/registration";
import ScreensaverPage from "./Pages/ScreensaverPage/screensaverPage";
import HomePage from "./Pages/HomePage/homepage";
import PrivateRouter from "./PrivateRouter";
import ProfileModalMenu from "./Components/Modal/UserModal/userModalMenu";
import AddNewPetPage from "./Pages/AddNewPetPage/addNewPetPage";
import ModalNotices from "./Components/Modal/ModalNotices/modalNotices";

const NewsPage = lazy<React.FC>(() => import("./Pages/NewsPage/news"));
const NoticesPage = lazy<React.FC>(
  () => import("./Pages/NoticesPage/noticesPage")
);
const FriendsPage = lazy<React.FC>(
  () => import("./Pages/FriendsPage/friendsPage")
);
const ErrorComponent = lazy<React.FC>(
  () => import("./Components/ErrorComponent/error")
);

const App: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={(<Layout />) as JSX.Element}>
          <Route index element={(<ScreensaverPage />) as JSX.Element} />
          <Route path="/login" element={(<LoginPage />) as JSX.Element} />
          <Route
            path="/registration"
            element={(<RegistrationPage />) as JSX.Element}
          />
          {/* Private Router start */}
          <Route
            path="/home"
            element={
              (
                <PrivateRouter redirectTo="/login" component={HomePage} />
              ) as JSX.Element
            }
          />
          <Route
            path="/profile"
            element={
              (
                <PrivateRouter
                  redirectTo="/login"
                  component={ProfileModalMenu}
                />
              ) as JSX.Element
            }
          >
            <Route
              path="modal-notice"
              element={(<ModalNotices />) as JSX.Element}
            />
          </Route>

          <Route
            path="/add-pet"
            element={
              (
                <PrivateRouter redirectTo="/login" component={AddNewPetPage} />
              ) as JSX.Element
            }
          />

          {/* Private Router end */}

          <Route path="/news" element={(<NewsPage />) as JSX.Element} />
          <Route path="/notices" element={(<NoticesPage />) as JSX.Element}>
            <Route
              path="modal-notice"
              element={(<ModalNotices />) as JSX.Element}
            />
          </Route>
          <Route path="/friends" element={(<FriendsPage />) as JSX.Element} />
          <Route path="*" element={(<ErrorComponent />) as JSX.Element} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
