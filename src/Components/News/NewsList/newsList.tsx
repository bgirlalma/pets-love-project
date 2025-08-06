import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from "../../../Redux/store"
import { fetchInformation } from "../../../Redux/news/newsOptional"

const NewsList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const news = useSelector((state: RootState) => state.NewsPets.news)
    
    useEffect(() => {
     dispatch(fetchInformation()).then((res) => {
       console.log("Thunk result:", res);
     });
    }, [dispatch])
    
    useEffect(() => {
console.log("News updated:", news);
    },[news])
    return (
        <div>
            <ul>
                {news && news.map((item) => (
                    <li key={item.uid}>
                        <img src={item.img} alt="News Photo" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <a href={item.link}>Read more</a>
                 </li>
                ))}
            </ul>
        </div>
    )
}

export default NewsList