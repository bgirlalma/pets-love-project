
import OurFriendsList from "./FriendsList/friendsList";
import { FriendsContainer, PositionContainer, Title } from "./friends.styled";

const FriendsComponent = () => {
  return (
    <FriendsContainer>
      <PositionContainer>
        <Title>Our Friends</Title>
        <OurFriendsList />
      </PositionContainer>
    </FriendsContainer>
  );
};

export default FriendsComponent;
