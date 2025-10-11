import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import { fetchOurFriends } from "../../../Redux/ourFriends/ourfriendsOptional";
import {
  FriendsCard,
  Card,
  FriendsWorkTime,
  PositionContainer,
  Image,
  DescContainer,
  FriendsName,
  FriendsEmail,
  FriendsAddress,
  FriendsPnone,
} from "./friendsList.styled";
import LearnMoreButton from "../../Notices/Buttons/LearnMore/learnmorebutton";


const OurFriendsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const datafriends = useSelector(
    (state: RootState) => state.ourFriendsCollection.ourfriends
  );

  useEffect(() => {
    dispatch(fetchOurFriends()).then((res) => {
      console.log("Thunk result:", res);
    });
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetch Friends", datafriends);
  }, [datafriends]);

  return (
    <>
      <FriendsCard>
        {datafriends &&
          datafriends.map((data) => (
            <Card key={data.uid}>
              <FriendsWorkTime>{data.workTime}</FriendsWorkTime>
              <PositionContainer>
                <Image src={data.img} alt="" />
                <DescContainer>
                  <FriendsName>{data.name}</FriendsName>
                  <FriendsEmail>
                    Email: <span>{data.email}</span>
                  </FriendsEmail>
                  <FriendsAddress>
                    Address: <span>{data.address}</span>
                  </FriendsAddress>
                  <FriendsPnone>Phone:
                    <span>{data.phone}</span>
                  </FriendsPnone>
                </DescContainer>
              </PositionContainer>
              
            </Card>
          ))}
      
      </FriendsCard>
    </>
  );
};

export default OurFriendsList;
