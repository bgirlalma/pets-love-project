import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import LoginPage from "./Pages/LoginPage/login"
import RegistrationPage from "./Pages/RegistrationPage/registration"
import NewsPage from "./Pages/NewsPage/news"
import ScreensaverPage from "./Pages/ScreensaverPage/screensaverPage"
import HomePage from "./Pages/HomePage/homePage"
import { PrivateRouter } from "./PrivateRouter"


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
              <PrivateRouter redirectTo="/login" component={<HomePage />} />
            }
          />
          {/* Private Router end */}
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" />
          <Route path="friends" />
        </Route>
      </Routes>
    </>
  );
}

export default App
