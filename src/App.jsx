import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./Pages/HomePage/homepage"
import LoginPage from "./Pages/LoginPage/login"
import RegistrationPage from "./Pages/RegistrationPage/registration"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage/> } />
        </Route>
     </Routes>
    </>
  )
}

export default App
