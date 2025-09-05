import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { setSortPets } from "../../../../Redux/notices/sortSlice";
import {
  RadioButtonContainer,
  ButtonPopular,
  IconContainerPopular,
  ButtonUnpopular,
  IconContainerUnpopular,
  ButtonCheap,
  IconContainerCheap,
  ButtonExpensive,
  IconContainerExpensive,
} from "./radioButtons.styled";
import { WhiteCloseIcon } from "../../../../Image/notices/white-close";
import React from "react";
const RadioFilterButtons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sortPetsselected = useSelector(
    (state: RootState) => state.sortPets.value
  ) as string;

  const handleClick = (
    value: "popular" | "unpopular" | "cheap" | "expensive"
  ) => {
    dispatch(setSortPets(value));
    };
    
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // ⬅️ блокируем всплытие клика
    dispatch(setSortPets(""));
  }

  return (
    <RadioButtonContainer>
      <ButtonPopular
        type="button"
        $active={sortPetsselected === "popular"}
        onClick={() => handleClick("popular")}
      >
        Popular
        <IconContainerPopular
          onClick={handleClear}
          $active={sortPetsselected === "popular"}
        >
          <WhiteCloseIcon />
        </IconContainerPopular>
      </ButtonPopular>
      <ButtonUnpopular
        type="button"
        $active={sortPetsselected === "unpopular"}
        onClick={() => handleClick("unpopular")}
      >
        Unpopular
        <IconContainerUnpopular
          onClick={handleClear}
          $active={sortPetsselected === "unpopular"}
        >
          <WhiteCloseIcon />
        </IconContainerUnpopular>
      </ButtonUnpopular>
      <ButtonCheap
        type="button"
        $active={sortPetsselected === "cheap"}
        onClick={() => handleClick("cheap")}
      >
        Cheap
        <IconContainerCheap $active={sortPetsselected === "cheap"} onClick={handleClear}>
          <WhiteCloseIcon />
        </IconContainerCheap>
      </ButtonCheap>
      <ButtonExpensive
        type="button"
        $active={sortPetsselected === "expensive"}
        onClick={() => handleClick("expensive")}
      >
        Expensive
        <IconContainerExpensive $active={sortPetsselected === 'expensive'} onClick={handleClear}>
          <WhiteCloseIcon />
        </IconContainerExpensive>
      </ButtonExpensive>
    </RadioButtonContainer>
  );
};

export default RadioFilterButtons;
