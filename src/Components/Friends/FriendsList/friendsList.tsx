import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import { fetchOurFriends } from "../../../Redux/ourFriends/ourfriendsOptional";
import {FriendsCard, Card, FriendsWorkTime, FriendsName, FriendsEmail, FriendsAddress, FriendsPnone} from './friendsList.styled'
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
    <div>
      <FriendsCard>
        {datafriends &&
          datafriends.map((data) => (
            <Card key={data.uid}>
              <FriendsWorkTime>{data.workTime}</FriendsWorkTime>
              <FriendsName>{data.name}</FriendsName>
              <FriendsEmail>{data.email}</FriendsEmail>
              <FriendsAddress>{data.address}</FriendsAddress>
              <FriendsPnone>{data.phone}</FriendsPnone>
            </Card>
          ))}
      </FriendsCard>
    </div>
  );
};

export default OurFriendsList;
