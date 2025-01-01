import { IconMenu } from "../../Image/userimg/menu";
import Logo from "../Logo/logo";
import { HeaderContainer } from "./headerComponent.styled";


const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Logo />
      <IconMenu/>
    </HeaderContainer>
  );
};

export default HeaderComponent;
