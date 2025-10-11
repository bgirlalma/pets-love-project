import { Outlet } from "react-router-dom";
import NoticesComponent from "../../Components/Notices/notices"

const NoticesPage = () => {
    return (
        <>
            <NoticesComponent />
            <Outlet/>
        </>
    )
}

export default NoticesPage;