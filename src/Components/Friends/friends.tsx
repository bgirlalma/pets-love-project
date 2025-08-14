import OurFriendsList from "./FriendsList/friendsList";
import { FriendsContainer, Title } from "./friends.styled";

const FriendsComponent = () => {
  return (
    <FriendsContainer>
          <Title>Our Friends</Title>
          <OurFriendsList/>
    </FriendsContainer>
  );
};

export default FriendsComponent;
