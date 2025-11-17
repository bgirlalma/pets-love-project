
import FindNewPetsInput from "./LookForInputs/FindNewPetsInput/findNewPetsInput";
import CustomCategorySelector from "./LookForInputs/CategorySelector/categorySelector";
import NoticesList from "./NoticesList/noticesList"
import {
  NoticesContainer,
  NoticesTitle,
  SearchContainer,
  DekstopPositionContainer,
  TabletPositionContainer,
  CustomLineContainer,
  PositionCategoryAndGenderContainer,
} from "./notices.styled";
import { useEffect, useMemo, useState } from "react";
import GenderCustomSelector from "./LookForInputs/GenderSelector/genderSelector";
import TypeOfPetsSElector from "./LookForInputs/TypePetSelector/typePetsSelector";
import LocationInput from "./LookForInputs/LocationInput/locationInput";
import RadioFilterButtons from "./LookForInputs/RadioButtons/radioButtons";
import PaginationComponent from "../PaginationComponent/pagination";
import {RootState} from '../../Redux/store'
import { useDispatch, useSelector } from "react-redux";
import { fetchDifferentPets } from "../../Redux/notices/noticesOptions";
import { AppDispatch } from "../../Redux/store";
import { setDifferentPets } from "../../Redux/notices/noticesSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const NoticesComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  // стан для фильтрации за категориею
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  // стан для фильтрации за гендером
  const [selectedGender, setSelectedGender] = useState<string>("");
  // стан для фильтрации за типом
  const [selectedTypeOfPets, setSelectedTypeOfPets] = useState<string>("");

 useEffect(() => {
   const unsub = onSnapshot(
     collection(firestore, "listofdifferentpets"),
     (snapshot) => {
       const petsData = snapshot.docs.map((doc) => ({
         uid: doc.id,
         ...doc.data(),
       }));

       // Обновляем Redux напрямую
       dispatch(setDifferentPets(petsData));
     }
   );

   return () => unsub();
 }, [dispatch]);

  const data = useSelector((state: RootState) => state.noticesPets.pets);
  const filteredDiferedPets = useSelector(
    (state: RootState) => state.noticesFilter
  ) as string;
  const filterLocationPets = useSelector(
    (state: RootState) => state.noticesPetsFilterLocation
  ) as string;
  const sortPetsselect = useSelector(
    (state: RootState) => state.sortPets.value
  ) as string;

  //  // фільтруємо данні за title, location,category, gender, type, 
  const filteredPets = useMemo(() => {
    return data.filter((items) => {
      // title
      const matchesTitle = (items.title || "")
        .toLowerCase()
        .includes(filteredDiferedPets.toLowerCase());
      // category
      const matchesCategory =
        !selectedCategory ||
        selectedCategory.toLowerCase() === "show all" ||
        (items.category || "").toLowerCase() === selectedCategory.toLowerCase();

      const matchesGender =
        !selectedGender ||
        selectedGender.toLowerCase() === "show all" ||
        (items.sex || "").toLowerCase() === selectedGender.toLowerCase();

      const matchedTypeOfPets =
        !selectedTypeOfPets ||
        selectedTypeOfPets.toLowerCase() === "show all" ||
        (items.species || "").toLowerCase() ===
          selectedTypeOfPets.toLowerCase();

      const matchesFilterLocation = (items.city || "")
        .toLowerCase()
        .includes(filterLocationPets.toLowerCase());

      // фільтруємо данні за price
      let matchedSortPets = true;
      if (sortPetsselect === "expensive")
        matchedSortPets = items.price !== undefined && items.price >= 250;
      else if (sortPetsselect === "cheap")
        matchedSortPets = items.price !== undefined && items.price < 250;
      else if (sortPetsselect === "popular")
        matchedSortPets = items.rating !== undefined && items.rating >= 1;
      else if (sortPetsselect === "unpopular")
        matchedSortPets = items.rating !== undefined && items.rating < 1;

      return (
        matchesTitle &&
        matchesCategory &&
        matchesGender &&
        matchedTypeOfPets &&
        matchesFilterLocation &&
        matchedSortPets
      );
    });
  }, [
    data,
    filteredDiferedPets,
    selectedCategory,
    selectedGender,
    selectedTypeOfPets,
    filterLocationPets,
    sortPetsselect,
  ]);


  return (
    <NoticesContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <SearchContainer>
        <DekstopPositionContainer>
          <FindNewPetsInput />
          <PositionCategoryAndGenderContainer>
            <CustomCategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <GenderCustomSelector
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </PositionCategoryAndGenderContainer>
          <TabletPositionContainer>
            <TypeOfPetsSElector
              selectedTypeOfPets={selectedTypeOfPets}
              setSelectedTypeOfPets={setSelectedTypeOfPets}
            />
            <LocationInput />
          </TabletPositionContainer>
        </DekstopPositionContainer>
        <CustomLineContainer></CustomLineContainer>
        <RadioFilterButtons />
      </SearchContainer>

      {/* Пагінація */}
      <PaginationComponent
        data={filteredPets}
        itemsPerPage={6}
        renderItems={(itemsOnPage) => (
          <NoticesList filteredPets={itemsOnPage} />
        )}
      />
    </NoticesContainer>
  );
};

export default NoticesComponent