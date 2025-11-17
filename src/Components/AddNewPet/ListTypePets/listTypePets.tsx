import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../Redux/store"
import { useEffect } from "react"
import { ListTypePets } from "../../../Redux/pets/myPets/myPetsOptional"
import { ListStyled, ItemsStyled } from "./listTYpePets.styled";

const ListPetsType = ({ onSelect }: { onSelect: (value: string) => void }) => {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.TypePets.data)

    useEffect(() => {
      dispatch(ListTypePets());
    }, [dispatch]);

    useEffect(() => {
    }, [data]);

    return (
      <ListStyled>
        {data &&
          Object.entries(data).map(([key, value]) => (
              <ItemsStyled key={key} onClick={() => onSelect(value)}>
                {value}
              </ItemsStyled>
          ))}
      </ListStyled>
    );
}

export default ListPetsType