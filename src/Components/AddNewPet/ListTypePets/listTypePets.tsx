import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../Redux/store"
import { useEffect } from "react"
import { ListTypePets } from "../../../Redux/pets/myPets/myPetsOptional"

const ListPetsType = () => {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.TypePets.data)

    useEffect(() => {
      dispatch(ListTypePets());
    }, [dispatch]);

    useEffect(() => {
      console.log("Get Data", data);
    }, [data]);

    return (
      <>
        {data &&
          Object.entries(data).map(([key, value]: any) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
      </>
    );
}

export default ListPetsType