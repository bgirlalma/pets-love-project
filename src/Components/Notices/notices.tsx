import SearchInputcomponent from "../News/inputSearch/inputSearch"
import NoticesList from "./NoticesList/noticesList"
import {NoticesContainer} from './notices.styled'

const NoticesComponent = () => {
    
    return (
        <NoticesContainer>
            <h1>Notices</h1>
            <div>
                <SearchInputcomponent/>
            </div>
            <NoticesList/>
        </NoticesContainer>
    )
}

export default NoticesComponent